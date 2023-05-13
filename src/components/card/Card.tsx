import { FC } from "react";
import { CardProps } from "./CardProps";
import './card.css'

export const Card: FC<CardProps> = ({ children, fontColor }) => {
    return (
      <div className="card-450" style={{color: fontColor}}>
        {children}
      </div>
    );
  };
  