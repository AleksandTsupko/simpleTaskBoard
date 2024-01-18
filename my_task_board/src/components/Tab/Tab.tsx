import classes from "./Tab.module.scss"

export function Tab({title}: {title: string} ) {
    return (
        <div className={classes.tab}>
            <span>{title}</span>
        </div>
    )
}