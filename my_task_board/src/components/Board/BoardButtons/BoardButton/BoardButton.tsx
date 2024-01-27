import { useRef } from "react"
import { Modal } from "../../../Modal/Modal"
import classes from "./BoardButton.module.scss"

export function BoardButton({title, clickHandler} : {title: string, clickHandler: Function}) {
    

    // const { selectBoard } = useActions()
    // const [isActive, setIsActive] = useState<boolean>(false)
    // const { selectedBoard } = useAppSelector(state => state.supabase)
    // const buttonRef = useRef<H
    

    return (
        <>        
            <button className={classes.button}
                // className={selectedBoard === board.id ? `${classes.tab} ${classes.active}` : classes.tab}
                onClick={() => clickHandler()}
            >
                {title}
            </button>
        </>
    )
}