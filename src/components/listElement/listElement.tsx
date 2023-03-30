import { FC } from "react"
import { ListData } from "./ListData"

export const ListElement: FC<ListData> = ({ listElementValue, style }) => {
    return (
        <a href="/example/#" className={style}>
            {listElementValue}
        </a>
    )
}