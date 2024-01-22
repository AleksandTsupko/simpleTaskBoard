import { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/redux"
import { IBoard, IStage } from "../../models/models"
import { useGetBoardsQuery, useGetStagesQuery } from "../../store/supabase/supabase.api"
import classes from "./Board.module.scss"
import { Stage } from "../Stage/Stage"
import { log } from "console"
import { BoardButton } from "../BoardButton/BoardButton"
import { BoardButtons } from "../BoardButtons/BoardButtons"

export function Board() {
    // const { data: boards } = useGetBoardsQuery("")
    const { selectedBoard } = useAppSelector(state => state.supabase)
    const { data: stages } = useGetStagesQuery(selectedBoard ? selectedBoard : 0)

    // useEffect(() => {
    //     return () => {
    //         if (boards) {
    //             setBoard(boards?.filter((board) => board.id === Number(selectedBoard))[0])
    //             console.log(boards)
    //             console.log(board)
    //             console.log("selectedBoard1 " + selectedBoard)
    //         }
    //     }
    // }, [boards, selectedBoard])

    return (
        <>
            <div className={classes.mainBoardContainer}>
                <BoardButtons />

                <div
                    className={classes.board}
                    style={{ gridTemplateColumns: `repeat(${stages ? stages.length : "1"}, 1fr)` }}
                >


                    {!selectedBoard && <span>Не выбрана доска</span>}

                    {selectedBoard && stages && stages.map((stage) => (
                        <Stage key={stage.id} title={stage.title} />
                    )
                    )}
                </div>
            </div>

        </>

    )
}