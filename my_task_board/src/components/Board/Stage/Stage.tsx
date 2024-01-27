import { click } from "@testing-library/user-event/dist/click"
import classes from "./Stage.module.scss"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { useActions } from "../../../hooks/actions"
import { IStage, ITask } from "../../../models/models"

interface IStageComponent {
    stage: IStage,
    tasks: ITask[]
}

export function Stage({stage, tasks}: IStageComponent ) {


    return (
        <div 
            className={classes.stage}
            // onClick={clickHandler}
        >
            <div className={classes.stageTitle}>
                <span style={{color: "white"}}>{stage.title}</span>
            </div>
            
            <div className={classes.stageBody}>
                {tasks && tasks.filter((task) => (task.stageId ===  stage.id)).map((task) => (
                    <span key={task.id} style={{color: "white"}}>{task.title}</span>
                ))}
            </div>
        </div>
    )
}