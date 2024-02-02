import { useRef } from "react"
import { Modal } from "../../../Modal/Modal"
import classes from "./BoardButton.module.scss"

export function BoardButton({title, clickHandler} : {title: string, clickHandler: Function}) {
    
    return (
        <>        
            <button className={classes.button}
                onClick={() => clickHandler()}
            >
                {title}
            </button>
        </>
    )
}