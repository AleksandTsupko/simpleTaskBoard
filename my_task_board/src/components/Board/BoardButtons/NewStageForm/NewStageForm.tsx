import { ChangeEvent, Dispatch, SetStateAction, useEffect, useId, useState } from "react"
import { BoardButton } from "../BoardButton/BoardButton"
import { useAppSelector } from "../../../../hooks/redux"
import { useCreateNewStageMutation } from "../../../../store/supabase/supabase.api"
import classes from "./NewStageForm.module.scss"
import { INewStageValues, IStage } from "../../../../models/models"

export interface INewTaskValues {
    title: string,
    text: string,
    boardId: number,
    stage: IStage | null
}

export const NewStageForm = ({setIsActive} : {setIsActive: Dispatch<SetStateAction<boolean>>}) => {
    const { selectedBoard } = useAppSelector(state => state.supabase)
    const [createStage, { isError, isLoading }] = useCreateNewStageMutation()
    const titleInputId = useId()

    const [newStageValues, setNewStageValues] = useState<INewStageValues>({
        title: "",
        boardId: selectedBoard ? selectedBoard : 0,
    })

    const createBtnHandler = () => {
        createStage(newStageValues);
        setIsActive(false);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStageValues((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    useEffect(() => {
        if (selectedBoard) {
            setNewStageValues((prev) => {
                return {...prev, boardId: selectedBoard}
            })
        }
    },[selectedBoard])

    return (
        <div className={classes.form}>
            <label htmlFor={titleInputId}>Title</label>
            <input
                id={titleInputId}
                type="text"
                name="title"
                value={newStageValues.title}
                onChange={changeHandler}
            />

            <BoardButton title="Create" clickHandler={createBtnHandler} />
        </div>
    )
}