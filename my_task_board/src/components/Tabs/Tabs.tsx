import { NewBoardTab } from "../NewBoardTab/NewBoardTab"
import { Tab } from "../Tab/Tab"
import classes from "./Tabs.module.scss"

export function Tabs() {
    return (
        <div className={classes.tabs}>
            <NewBoardTab/>
            <Tab/>
        </div>
    )
}