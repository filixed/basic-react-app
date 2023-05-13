import { FC } from "react";
import "../cardElement/cardElement.css"

export interface CardElementProps {
    data: string;
    fontSize?: string;
    fontColor?: string;
    backGoundColor?: string;
}

export const CardElement: FC<CardElementProps> = ({ data, fontSize, fontColor, backGoundColor}) => {
    return (
        <div className="card-Content" style={{ backgroundColor: backGoundColor, color: fontColor}}>
            <p className="" style={{ fontSize: fontSize }}>
                {data}
            </p>
        </div>
    )
}