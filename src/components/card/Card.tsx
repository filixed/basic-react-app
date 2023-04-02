import { FC } from "react";
import { CardProps } from "./CardProps";
import './card.css'

export const Card: FC<CardProps> = ({ children, style }) => {
    return (
      <div className="card-450">
        {children}
      </div>
    );
  };
  