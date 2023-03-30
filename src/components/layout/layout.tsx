import React, { FC } from "react";
import { Props } from '../../utils/props';

export const Layout: FC<Props> = ({ children }) => {
    return (
      <div className="container">
        <main>{children}</main>
      </div>
    );
  };
  
