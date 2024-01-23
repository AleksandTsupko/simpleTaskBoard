import { createPortal } from "react-dom"
import { useActions } from "../../hooks/actions"
import { BoardButton } from "../BoardButton/BoardButton"
import classes from "./BoardButtons.module.scss"
import { Modal } from "../Modal/Modal"
import { useState } from "react"
import { NewTaskForm } from "../NewTaskForm/NewTaskForm"

export function BoardButtons() {
    const { setIsShowModal } = useActions()
    const [isActive, setIsActive] = useState<boolean>(false)
    const newTaskHandler = () => {
        // const modalCont = document.getElementById("modalContent");
        
        // if (modalCont) {
        //     console.log(modalCont);
            
        // }
        // setIsShowModal(true)
        setIsActive(true)

    }

    return (
        <>
        <Modal isActive={isActive} setIsActive={setIsActive}><span>TEST</span></Modal>
        <div className={classes.boardButtons}>
            <BoardButton title="New task" clickHandler={newTaskHandler}/>
        </div>
        </>
    ) 
}