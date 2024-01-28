import { useRef, useState } from "react"
import { ITask } from "../../../../models/models"
import classes from "./Task.module.scss"
import { useAppSelector } from "../../../../hooks/redux"
import { useActions } from "../../../../hooks/actions"

export const Task = ({ task, isDragged }: { task: ITask, isDragged: boolean }) => {
    // const draggedElementRef = useRef<HTMLDivElement | null>(null)
    // const [ isDragged, setIsDragged ] = useState<boolean>(false)
    // const { draggedTask } = useAppSelector(state => state.supabase)
    const { setDraggedTaskId } = useActions()

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedTaskId(null)
    }

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedTaskId(task.id)
    }

    return (
        <div 
            draggable={true}
            id="taskContainer"
            className={isDragged ? `${classes.taskContainer} ${classes.dragged}` : classes.taskContainer}
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            // onDragOver={(e) => onDragOverHandler(e)}
            // onDrop={(e) => onDropHandler(e)}
        >
            <div className={classes.taskTitle}>
                <span>{task.title}</span>
            </div>
            <div className={classes.taskText}>
                {task.text}
            </div>
            <div className={classes.taskFooter}>
                <span>footer</span>
            </div>
        </div>

    )
}