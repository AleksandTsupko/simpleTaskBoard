import { click } from "@testing-library/user-event/dist/click"
import classes from "./Stage.module.scss"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { useActions } from "../../../hooks/actions"

export function Stage({title}: {title: string} ) {


    return (
        <div 
            className={classes.stage}
            // onClick={clickHandler}
        >
            <div className={classes.stageTitle}>
                <span style={{color: "white"}}>{title}</span>
            </div>
            
            <div className={classes.stageBody}>

            </div>
        </div>
    )
}