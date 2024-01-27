import { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/redux"
import { IBoard, IStage } from "../../models/models"
import { useGetBoardsQuery, useLazyGetStagesQuery, useLazyGetTasksQuery } from "../../store/supabase/supabase.api"
import classes from "./Board.module.scss"
import { Stage } from "./Stage/Stage"
import { log } from "console"
import { BoardButton } from "./BoardButtons/BoardButton/BoardButton"
import { BoardButtons } from "./BoardButtons/BoardButtons"

export function Board() {
    // const { data: boards } = useGetBoardsQuery("")
    const { selectedBoard } = useAppSelector(state => state.supabase)
    const [getStages, { data: stages }] = useLazyGetStagesQuery()
    const [getTasks, { isError, isLoading, data: tasks }] = useLazyGetTasksQuery()

    useEffect(() => {
        if (selectedBoard) {
            getStages(selectedBoard)
            getTasks(selectedBoard)            
        }
        
    },[selectedBoard])

    return (
        <>
            <div className={classes.mainBoardContainer}>
                <BoardButtons />

                <div
                    className={classes.board}
                    style={{ gridTemplateColumns: `repeat(${stages ? stages.length : "1"}, 1fr)` }}
                >


                    {!selectedBoard && <span>Не выбрана доска</span>}

                    {selectedBoard && tasks && stages && stages.map((stage) => (
                        <Stage key={stage.id} stage={stage} tasks={tasks}/>
                    )
                    )}
                </div>
            </div>

        </>

    )
}