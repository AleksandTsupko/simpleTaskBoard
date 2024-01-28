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

    // const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
    //     e.preventDefault();
    //     // (e.target as HTMLDivElement).closest("#taskContainer")?.classList.add("dragged");
    //     // setDraggedTask(e.target)
        

    //     // setIsDragged(true)
    //     console.log((e.target as HTMLDivElement).closest("#taskContainer"));
    // }

    // const mouseUpHandler = (e: React.MouseEvent<HTMLDivElement,MouseEvent>) => {
    //     e.preventDefault();
    //     // (e.target as HTMLDivElement).closest("#taskContainer")?.classList.remove("dragged");
    //     // setIsDragged(false)
    //     // console.log("up " + e.pageX);
    // }
    // const onDropHandler = (e: React.DragEvent) => {
    //     e.preventDefault()
    //     console.log(e.target);
        
    // }

    // const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //     // console.log(e)
    // }

    // const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    // }

    return (
        <>
            <div
                // onMouseDown={(e) => mouseDownHandler(e)}
                // onMouseUp={(e) => mouseUpHandler(e)}
                // onDragEnd={(e) => dragEndHandler(e)} 
                // onDragOver={(e) => onDragOverHandler(e)}
                // onDrop={(e) => onDropHandler(e)}
                
                className={classes.mainBoardContainer}
            >
                <BoardButtons />

                <div
                    className={classes.board}
                    style={{ gridTemplateColumns: `repeat(${stages ? stages.length : "1"}, minmax(10rem,1fr))` }}
                >


                    {!selectedBoard && <span>Не выбрана доска</span>}

                    {selectedBoard && tasks && stages && stages.map((stage) => (
                        <Stage 
                            key={stage.id} 
                            stage={stage} 
                            tasks={tasks}
                        />
                    )
                    )}
                </div>
            </div>

        </>

    )
}