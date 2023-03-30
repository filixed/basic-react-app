import { FC } from "react";
import { SideBarProps } from "./sideBarProps";

export const SideBar: FC<SideBarProps> = ({ children, className, onToggleSidebar}) => {
    return (
      <div className={'className'}>
         <button onClick={onToggleSidebar}>Toggle Sidebar</button>
        {children}
      </div>
    );
  };


