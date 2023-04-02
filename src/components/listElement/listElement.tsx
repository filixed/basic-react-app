import { FC } from "react"
import { ListData } from "./ListData"
import './listElement.css'

export const ListElement: FC<ListData> = ({ listElementValue, style }) => {
    return (
        <a href="/example/#" className="list-item">
            {listElementValue}
        </a>
    )
}