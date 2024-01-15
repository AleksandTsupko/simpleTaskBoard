import { useRef, useState } from "react"
import classes from './HomePage.module.scss'

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
        <>
            <h3>Home</h3>
            <form>
                <input 
                    ref={boardNameInput}
                    type="text"
                    value={newBoardName}
                    onChange={e => setNewBoardName(e.target.value)}
                />
                <button onClick={(e) => createHandler(e)}>Create new board</button>
            </form>
        </>
    )
}