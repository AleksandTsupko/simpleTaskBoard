import { click } from "@testing-library/user-event/dist/click"
import classes from "./Stage.module.scss"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { useActions } from "../../../hooks/actions"
import { ITask } from "../../../models/models"

interface IStageComponent {
    title: string,
    tasks: ITask[]
}

export function Stage({title, tasks}: IStageComponent ) {


    return (
        <div 
            className={classes.stage}
            // onClick={clickHandler}
        >
            <div className={classes.stageTitle}>
                <span style={{color: "white"}}>{title}</span>
            </div>
            
            <div className={classes.stageBody}>
                {tasks && tasks.map((task) => (
                    <span key={task.id} style={{color: "white"}}>{task.title}</span>
                ))}
            </div>
        </div>
    )
}