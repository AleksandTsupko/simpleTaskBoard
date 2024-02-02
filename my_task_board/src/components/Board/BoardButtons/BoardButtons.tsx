import { createPortal } from "react-dom"
import { useActions } from "../../../hooks/actions"
import { BoardButton } from "./BoardButton/BoardButton"
import classes from "./BoardButtons.module.scss"
import { Modal } from "../../Modal/Modal"
import { useState } from "react"
import { NewTaskForm } from "./NewTaskForm/NewTaskForm"
import { NewStageForm } from "./NewStageForm/NewStageForm"

export function BoardButtons() {
    const [isActiveNewTask, setIsActiveNewTask] = useState<boolean>(false)
    const [isActiveNewStage, setIsActiveNewStage] = useState<boolean>(false)

    const newTaskHandler = () => {
        setIsActiveNewTask(true);
        setIsActiveNewStage(false);
    }

    const newStageHandler = () => {
        setIsActiveNewStage(true);
        setIsActiveNewTask(false);
    }

    return (
        <>
        <Modal title="Create new task" isActive={isActiveNewTask} setIsActive={setIsActiveNewTask}><NewTaskForm setIsActive={setIsActiveNewTask}/></Modal>
        <Modal title="Create new stage" isActive={isActiveNewStage} setIsActive={setIsActiveNewStage}><NewStageForm setIsActive={setIsActiveNewStage}/></Modal>
        <div className={classes.boardButtons}>
            <BoardButton title="New task" clickHandler={newTaskHandler}/>
            <BoardButton title="New stage" clickHandler={newStageHandler}/>
        </div>
        </>
    ) 
}