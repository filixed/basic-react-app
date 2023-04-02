import { FC } from "react";
import  "../cardElement/cardElement.css"

export interface CardElementProps {
    data: string;
}

export const CardElement: FC<CardElementProps> = ({ data }) => {
    return (
        <div className="card-Content">
            <p className="">
                {data}
            </p>
        </div>
    )
}