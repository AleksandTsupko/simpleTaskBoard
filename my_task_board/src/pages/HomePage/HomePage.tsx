import { useRef, useState } from "react"
import classes from './HomePage.module.scss'
import { Tabs } from "../../components/Tabs/Tabs"
import { Board } from "../../components/Board/Board"

export function HomePage() {
    const [newBoardName, setNewBoardName] = useState("")
    const boardNameInput = useRef<HTMLInputElement>(null)

    const createHandler = (e:React.MouseEvent) => {
        e.preventDefault()
        if (newBoardName) {

        } else if (boardNameInput.current) {
            boardNameInput.current.classList.add(classes.wrong)
            boardNameInput.current.focus()
        }
    }


    return (
        <div className={classes.mainContainer}>
            <Tabs/>
            <Board/>
        </div>
    )
}