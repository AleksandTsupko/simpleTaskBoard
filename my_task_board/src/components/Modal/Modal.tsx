import { useRef } from "react"
import classes from "./Modal.module.scss"
import { useAppSelector } from "../../hooks/redux"
import { useActions } from "../../hooks/actions"

export function Modal() {
    const { setIsShowModal } = useActions()
    // const [isActive, setIsActive] = useState<boolean>(false)
    // const { selectedBoard } = useAppSelector(state => state.supabase)
    // const buttonRef = useRef<H
    const { isShowModal } = useAppSelector(state => state.supabase)
    const closeHandler = () => {
        // selectBoard(board.id)
    }

    return (
        <div className={isShowModal ? `${classes.active} ${classes.modal}` : classes.modal} onClick={() => setIsShowModal(false)}>
            <div className={classes.modalDialog} onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3 className='modal-title'>title</h3>
                    <span className='modal-close' onClick={closeHandler}>
                        +
                    </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>
                        {/* {content} */}
                    </div>
                </div>
            </div>
        </div>
    )
}