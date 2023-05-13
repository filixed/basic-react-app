import { FC } from "react"
import { ListData } from "./ListData"
import './listElement.css'

export const ListElement: FC<ListData> = ({ listElementValue, fontSize, fontColor }) => {
    return (
        <a href="/example/#" className="list-item" style={{fontSize, color: fontColor}}>
            {listElementValue}
        </a>
    )
}