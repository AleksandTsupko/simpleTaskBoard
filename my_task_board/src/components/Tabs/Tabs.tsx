import { useAppSelector } from "../../hooks/redux"
import { NewBoardTab } from "../NewBoardTab/NewBoardTab"
import { Tab } from "../Tab/Tab"
import classes from "./Tabs.module.scss"

export function Tabs() {
    const { boards } = useAppSelector(state => state.supabase)
    
    
    
    return (
        <div className={classes.tabs}>
            <NewBoardTab/>
            {boards && boards.length > 0 && boards.map((board) => (
                <Tab key={board} title={board}/>
            ))}
        </div>
    )
}