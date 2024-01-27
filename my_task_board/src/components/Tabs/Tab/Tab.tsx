import { click } from "@testing-library/user-event/dist/click"
import classes from "./Tab.module.scss"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks/redux"
import { useActions } from "../../../hooks/actions"
import { IBoard } from "../../../models/models"

export function Tab({board}: {board: IBoard} ) {
    const { selectBoard } = useActions()
    // const [isActive, setIsActive] = useState<boolean>(false)
    const { selectedBoard } = useAppSelector(state => state.supabase)

    const clickHandler = () => {
        selectBoard(board.id)
    }

    return (
        <div 
            className={selectedBoard === board.id ? `${classes.tab} ${classes.active}` : classes.tab}
            onClick={clickHandler}
        >
            <span>{board.title}</span>
        </div>
    )
}