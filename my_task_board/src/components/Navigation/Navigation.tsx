import { Link } from "react-router-dom"
import classes from "./Navigation.module.scss"

export function Navigation() {
    return (
        <nav className={classes.navigation}>
        <h3 className={classes.title}>Task Board</h3>

        <span>
            <Link to="/" className={classes.firstLink}>Home</Link>
            <Link to="/about">About</Link>
        </span>
        </nav>

    )
}
