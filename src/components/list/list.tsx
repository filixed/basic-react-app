import { FC } from "react"
import { NavClassName } from "./navList"
import "./list.css"

export const List: FC<NavClassName> = ({children, navClassName}) => {
    return(
        <nav className="navList">            
            {children}           
        </nav>
    )
}