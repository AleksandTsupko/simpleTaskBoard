import { useEffect } from "react"
import { useAppSelector } from "../../hooks/redux"
import { useGetBoardsQuery } from "../../store/supabase/supabase.api"
import { NewBoardTab } from "../NewBoardTab/NewBoardTab"
import { Tab } from "../Tab/Tab"
import classes from "./Tabs.module.scss"
import supabase from "../../store/supabase/supabaseClient"

export function Tabs() {
    // const { boards } = useAppSelector(state => state.supabase)
    const { data: boards } = useGetBoardsQuery("")
    console.log(boards);


    
    
    return (
        <div className={classes.tabs}>
            <NewBoardTab/>
            {boards && boards.length > 0 && boards.map((board) => (
                <Tab key={board.title} title={board.title}/>
            ))}
        </div>
    )
}