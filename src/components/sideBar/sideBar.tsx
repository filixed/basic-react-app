import { FC } from "react";
import { SideBarProps } from "./sideBarProps";

export const SideBar: FC<SideBarProps> = ({ children, className, onToggleSidebar}) => {
    return (
      <>
        {children}
      </>
    );
  };


