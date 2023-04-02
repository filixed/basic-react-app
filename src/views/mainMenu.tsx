import { useState } from "react";
import { List } from "../components/list/list";
import { ListElement } from "../components/listElement/listElement";
import { SideBar } from "../components/sideBar/sideBar";
import "./mainMenu.css";

interface Props {
  children?: React.ReactNode;
}

const MainMenu: React.FC<Props> = ({ children }) => {
  const listElementsData = [
    { id: 1, value: "example menu element" },
    { id: 2, value: "example menu element1" },
    { id: 3, value: "example menu element2" },
    { id: 4, value: "example menu element" },
    { id: 5, value: "example menu element1" },
    { id: 6, value: "example menu element2" },
  ];
  return (
      <div className="sidebar">
        <SideBar>
          <List>
            {listElementsData.map((listElement) => (
                <ListElement key={listElement.id} listElementValue={listElement.value} />
            ))}
          </List>
        </SideBar>
      </div>
  );
};

export default MainMenu;
