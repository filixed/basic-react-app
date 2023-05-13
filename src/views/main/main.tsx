import React, { useState } from "react";
import { Card } from "../../components/card/Card";
import { CardElement } from "../../components/cardElement/cardElement";
import MainMenu from "../mainMenu";
import "./main.css";

export const Main = () => {

  const [fontSize, setFontSize] = useState(5)
  const [fontColor, setFontColor] = useState("#000")
  const [backgroundColor, setBacgrkoundColor] = useState('#FFF')
  const [mainBackgroundColor, setMainBackgroundColor] = useState('#fff')

  const CardElementData = [
    { id: 1, value: "Page 1" },
    { id: 2, value: "Page 2" },
    { id: 3, value: "Page 3" },
    { id: 4, value: "Page 4" },
    { id: 5, value: "Page 5" },
    { id: 6, value: "Page 6" },
  ]

  const handleFontSizeChange = (option: boolean) => {
    if(option){
      setFontSize(fontSize+0.2)
    }
    else{
      setFontSize(fontSize-0.2)
    }
  }

  const handleContrastChange = (fontColor: string, backgroundColor: string, isChangeContrast: boolean) => {
    console.log({fontColor, backgroundColor, isChangeContrast});
    if(isChangeContrast === true){
      setFontColor(fontColor);
      setBacgrkoundColor(backgroundColor)
      setMainBackgroundColor('#000')
      return;
    }
    setFontColor('#000');
    setBacgrkoundColor('#FFF')
    setMainBackgroundColor('#fff')
  }

  return (
    <div>
      <div className="container"  style={{backgroundColor: mainBackgroundColor}}>
        <div className="menu">
          <MainMenu onFontSizeChange={handleFontSizeChange} onContrastChange={handleContrastChange}/>
        </div>
        <div className="content">
          {CardElementData.map((card) => (
            <Card key={card.id} className="card-450">
              <CardElement data="test" fontColor={fontColor} backGoundColor={backgroundColor} fontSize={fontSize.toString()+"vh"} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
