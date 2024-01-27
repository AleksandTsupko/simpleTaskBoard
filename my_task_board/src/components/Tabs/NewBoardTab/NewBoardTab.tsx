import { useEffect, useRef, useState } from "react"
import classes from "./NewBoardTab.module.scss"
import { useActions } from "../../../hooks/actions"
import supabase from "../../../store/supabase/supabaseClient"
import { useCreateNewBoardMutation } from "../../../store/supabase/supabase.api"

export function NewBoardTab() {
    // const {addBoard} = useActions()
    const [isActive, setIsActive] = useState(false)
    const [nameOfNewBoard, setNameOfNewBoard] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const timeoutOnBlurRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [createNewBoard,{ isLoading, isError}] = useCreateNewBoardMutation()

    useEffect(() => {
        if (isActive && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isActive])
    
    const iconHandler = (e: React.MouseEvent) => {
        if (isActive && nameOfNewBoard && nameOfNewBoard.length > 3) {
            if (timeoutOnBlurRef.current) clearTimeout(timeoutOnBlurRef.current)
            createNewBoard(nameOfNewBoard)
            setIsActive(false)
            setNameOfNewBoard("")
        } else {
            setIsActive(true)
        }
    }

    const inputOnBlurHandler = (e: React.FocusEvent) => {
        const timeoutId = setTimeout(() => {
            setIsActive(false)
            setNameOfNewBoard("")
        }, 3000)
        timeoutOnBlurRef.current = timeoutId
    }

    const inputOnFocusHandler = () => {
        if (timeoutOnBlurRef.current) clearTimeout(timeoutOnBlurRef.current)
    }


    return (
        <div className={isActive ? `${classes.newBoardTab} ${classes.active}` : classes.newBoardTab}>
            <div 
                className={classes.icon}
                onClickCapture={(e) => iconHandler(e)}
            />
            {isActive && <input
                ref={inputRef}
                className={classes.input}
                type="text"
                value={nameOfNewBoard}
                onChange={(e) => setNameOfNewBoard(e.target.value)}
                onBlur={(e) => inputOnBlurHandler(e)}
                onFocus={inputOnFocusHandler}
            />}
        </div>
    )
}