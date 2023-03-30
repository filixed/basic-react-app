import { FC } from "react"
import { NavClassName } from "./navList"

export const List: FC<NavClassName> = ({children, navClassName}) => {
    return(
        <nav className={navClassName}>            
            {children}           
        </nav>
    )
}