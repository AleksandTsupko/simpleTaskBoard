import { FC, LegacyRef, ReactNode, forwardRef, useRef } from "react"
import classes from "./Modal.module.scss"
import { useAppSelector } from "../../hooks/redux"
import { useActions } from "../../hooks/actions"
import { createPortal } from "react-dom"

export const Modal = ({children, title, isActive, setIsActive}:{children : ReactNode, title: string, isActive : boolean, setIsActive: Function}) => {
    // const { setIsShowModal } = useActions()
    // const [isActive, setIsActive] = useState<boolean>(false)
    // const { selectedBoard } = useAppSelector(state => state.supabase)
    // const buttonRef = useRef<H
    // const { isShowModal } = useAppSelector(state => state.supabase)
    const root = document.getElementById("root")
    const closeHandler = () => {
        setIsActive(false)
    }

    if (root) {
        return (
            createPortal(<div className={isActive ? `${classes.active} ${classes.modal}` : classes.modal} onClick={closeHandler}>
                <div className={classes.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={classes.modalHeader}>
                        <h3 className={classes.modalTitle}>{title}</h3>
                        <span className={classes.modalClose} onClick={closeHandler}>
                            +
                        </span>
                    </div>
                    <div className={classes.modalBody}>
                        <div className={classes.modalContent}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>, root)
        )
    } else {
        return null
    }
    
}