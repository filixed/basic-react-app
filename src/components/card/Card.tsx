import { FC } from "react";
import { CardProps } from "./CardProps";

export const Card: FC<CardProps> = ({ children, style }) => {
    return (
      <div className={style}>
        {children}
      </div>
    );
  };
  