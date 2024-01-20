import { click } from "@testing-library/user-event/dist/click"
import classes from "./Tab.module.scss"
import { useState } from "react"
import { useAppSelector } from "../../hooks/redux"
import { useActions } from "../../hooks/actions"

export function Tab({title}: {title: string} ) {
    const {selectBoard} = useActions()
    // const [isActive, setIsActive] = useState<boolean>(false)
    const { selectedBoard } = useAppSelector(state => state.supabase)

    const clickHandler = () => {
        selectBoard(title)
    }

    return (
        <div 
            className={selectedBoard === title ? `${classes.tab} ${classes.active}` : classes.tab}
            onClick={clickHandler}
        >
            <span>{title}</span>
        </div>
    )
}