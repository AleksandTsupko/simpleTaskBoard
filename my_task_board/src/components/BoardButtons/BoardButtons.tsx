import { useActions } from "../../hooks/actions"
import { BoardButton } from "../BoardButton/BoardButton"
import classes from "./BoardButtons.module.scss"

export function BoardButtons() {
    const { setIsShowModal } = useActions()
    const newTaskHandler = () => {
        setIsShowModal(true)
    }

    return (
        <div className={classes.boardButtons}>
            <BoardButton title="New task" clickHandler={newTaskHandler}/>
        </div>
    ) 
}