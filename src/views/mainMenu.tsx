import { useState } from "react";
import { List } from "../components/list/list";
import { ListElement } from "../components/listElement/listElement";
import { SideBar } from "../components/sideBar/sideBar";
import "./mainMenu.css";

interface Props {
  children?: React.ReactNode;
  onFontSizeChange: (newValue: boolean) => void;
  onContrastChange: (fontColor: string, backgroundColor: string, isContrastChange: boolean) => void;
}

const MainMenu: React.FC<Props> = ({ children, onFontSizeChange, onContrastChange}) => {

  const [fontSize, setFontSize] = useState(2);
  const [fontColor, setFontColor] = useState("#FFF");
  const [isContrast, setIsContrast] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#3892ce");

  const listElementsData = [
    { id: 1, value: "Page 1" },
    { id: 2, value: "Page 2" },
    { id: 3, value: "Page 3" },
    { id: 4, value: "Page 4" },
    { id: 5, value: "Page 5" },
    { id: 6, value: "Page 6" },
  ];

  const handleIncrementFontSize = () => {
    setFontSize(fontSize+0.2);
    onFontSizeChange(true);
  }

  const handledecrementFontSize = () => {
    setFontSize(fontSize-0.2);
    onFontSizeChange(false);
  }

  const handleCotnrastChange = () => {
    if(isContrast === false){
      setFontColor('#ffff00');
      setIsContrast(true);
      setBackgroundColor('#0000ff')
      onContrastChange('#ffff00', '#0000ff', true)
      return
    }
    setIsContrast(false)
    setFontColor('#FFF')
    setBackgroundColor('#3892ce')
    onContrastChange('#FFF', '#3892ce', false)
  }

  return (
      <div className="sidebar" style={{ backgroundColor: backgroundColor }}>
        <SideBar>
          <List>
            {listElementsData.map((listElement) => (
                <ListElement key={listElement.id} fontColor={fontColor} listElementValue={listElement.value} fontSize={fontSize.toString()+"vh"} />
            ))}
            <button onClick={handleIncrementFontSize}>+</button>
            <button onClick={handledecrementFontSize}>-</button>
            <button onClick={handleCotnrastChange}>Change Contrast</button>
          </List>
        </SideBar>
      </div>
  );
};

export default MainMenu;
