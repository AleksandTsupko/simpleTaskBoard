import { useEffect } from "react"
import { useAppSelector } from "../../hooks/redux"
import { useGetBoardsQuery } from "../../store/supabase/supabase.api"
import { NewBoardTab } from "./NewBoardTab/NewBoardTab"
import { Tab } from "./Tab/Tab"
import classes from "./Tabs.module.scss"
import supabase from "../../store/supabase/supabaseClient"
import { useActions } from "../../hooks/actions"

export function Tabs() {
    const { data: boards } = useGetBoardsQuery("")
    const { selectBoard } = useActions()
    const { selectedBoard } = useAppSelector(state => state.supabase)

    useEffect(() => {
        if (selectedBoard === null && boards && boards.length > 0) {
            selectBoard(boards[0].id)
        }
    }, [boards])

    return (
        <div className={classes.tabs}>
            <NewBoardTab />
            {boards && boards.length > 0 && boards.map((board) => (
                <Tab key={board.id} board={board} />
            ))}
        </div>
    )
}