import { createPortal } from "react-dom"
import { useActions } from "../../../hooks/actions"
import { BoardButton } from "./BoardButton/BoardButton"
import classes from "./BoardButtons.module.scss"
import { Modal } from "../../Modal/Modal"
import { useState } from "react"
import { NewTaskForm } from "./NewTaskForm/NewTaskForm"

export function BoardButtons() {
    // const { setIsShowModal } = useActions()
    const [isActive, setIsActive] = useState<boolean>(false)

    const newTaskHandler = () => {
        setIsActive(true)
    }

    return (
        <>
        <Modal title="Create new task" isActive={isActive} setIsActive={setIsActive}><NewTaskForm setIsActive={setIsActive}/></Modal>
        <div className={classes.boardButtons}>
            <BoardButton title="New task" clickHandler={newTaskHandler}/>
        </div>
        </>
    ) 
}