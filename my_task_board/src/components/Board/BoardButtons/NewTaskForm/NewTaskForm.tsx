import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from "react"
import { BoardButton } from "../BoardButton/BoardButton"
import { useAppSelector } from "../../../../hooks/redux"
import { useCreateNewTaskMutation, useGetStagesQuery, useLazyGetStagesQuery } from "../../../../store/supabase/supabase.api"
import classes from "./NewTaskForm.module.scss"
import { IStage } from "../../../../models/models"

export interface INewTaskValues {
    title: string,
    text: string,
    boardId: number,
    stage: IStage | null
}

export const NewTaskForm = ({setIsActive} : {setIsActive: Dispatch<SetStateAction<boolean>>}) => {
    const { selectedBoard } = useAppSelector(state => state.supabase)
    const [getStages, { data: stages }] = useLazyGetStagesQuery()
    const [createTask, { isError, isLoading }] = useCreateNewTaskMutation()
    const [dropdown, setDropdown] = useState(false)

    const [newTaskValues, setNewTaskValues] = useState<INewTaskValues>({
        title: "",
        text: "",
        boardId: selectedBoard ? selectedBoard : 0,
        stage: null
    })

    useEffect(() => {
        if (selectedBoard) {
            getStages(selectedBoard)
        }
        setNewTaskValues((prev) => {
            return { ...prev, boardId: selectedBoard ? selectedBoard : 0 }
        })

    }, [selectedBoard])

    useEffect(() => {
        if (selectedBoard) {
            getStages(selectedBoard)
        }
    }, [])

    const createBtnHandler = () => {
        createTask(newTaskValues);
        setIsActive(false);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setNewTaskValues((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const pickStageHandler = (stage: IStage) => {
        setDropdown(false)
        setNewTaskValues((prev) => {
            return { ...prev, stage }
        })
    }


    return (
        <div className={classes.form}>
            <label htmlFor="titleInput">Title</label>
            <input
                id="titleInput"
                type="text"
                name="title"
                value={newTaskValues.title}
                onChange={changeHandler}
            />

            <label htmlFor="textarea">Text</label>
            <textarea
                id="textarea"
                name="text"
                value={newTaskValues.text}
                onChange={changeHandler}
            />

            <label htmlFor="stageInput">Stage</label>
            <input
                id="stageInput"
                type="text"
                readOnly
                value={newTaskValues.stage ? newTaskValues.stage.title : ""}
                onClick={() => setDropdown(true)}
            />
            {dropdown && <ul>
                {stages?.map((stage) => (
                    <li
                        key={stage.id}
                        onClick={() => pickStageHandler(stage)}
                    >
                        {stage.title}
                    </li>
                ))}
            </ul>}

            <BoardButton title="Create" clickHandler={createBtnHandler} />
        </div>
    )
}