import { useEffect, useRef, useState } from "react"
import classes from "./NewBoardTab.module.scss"

export function NewBoardTab() {
    const [isActive, setIsActive] = useState(false)
    const [nameOfNewBoard, setNameOfNewBoard] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const timeoutOnBlurRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        if (isActive && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isActive])
    
    const iconHandler = (e: React.MouseEvent) => {
        if (isActive && nameOfNewBoard && nameOfNewBoard.length > 3) {
            if (timeoutOnBlurRef.current) clearTimeout(timeoutOnBlurRef.current)
            console.log(nameOfNewBoard)
        } else {
            setIsActive(true)
            // inputRef.current.focus()
        }
        
    }

    const inputOnBlurHandler = (e: React.FocusEvent) => {
        const id = setTimeout(() => {
            setIsActive(false)
            setNameOfNewBoard("")
        }, 3000)
        timeoutOnBlurRef.current = id
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