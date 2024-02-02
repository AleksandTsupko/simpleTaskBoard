import { click } from "@testing-library/user-event/dist/click"
import classes from "./Stage.module.scss"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { useActions } from "../../../hooks/actions"
import { IStage, ITask } from "../../../models/models"
import { Task } from "./Task/Task"
import { useChangeStageForTaskMutation } from "../../../store/supabase/supabase.api"

interface IStageComponent {
    stage: IStage,
    tasks: ITask[]
}

export function Stage({stage, tasks}: IStageComponent ) {
    const { draggedTaskId } = useAppSelector(state => state.supabase)
    const [ changeStageForTask, {isError, isLoading}] = useChangeStageForTaskMutation()

    const onDropHandler = (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedTaskId) {
            changeStageForTask({ taskId: draggedTaskId, stageId: stage.id});
        }    
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    return (
        <div 
            className={classes.stage}
            onDragOver={(e) => onDragOverHandler(e)}
            onDrop={(e) => onDropHandler(e)}
        >
            <div className={classes.stageTitle}>
                <span style={{color: "white"}}>{stage.title}</span>
            </div>
            
            <div className={classes.stageBody}>
                {tasks && tasks.filter((task) => (task.stageId ===  stage.id)).map((task) => (
                    <Task 
                        key={task.id} 
                        task={task}
                        isDragged={task.id === draggedTaskId}
                    />
                ))}
            </div>
        </div>
    )
}