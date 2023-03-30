import { Card } from "../../components/card/Card"
import MainMenu from "../mainMenu"
import './main.css';
import { CardStyleLeft, CardStyleLeftBottom, CardStyleRight, CardStyleRightBottom } from "./navStyle";

export const Main = () => {
    return (
        <div>
            <div>
                <MainMenu>
                </MainMenu>
            </div>
            <div>
                <div className="flex justify-between">
                    <Card style={CardStyleLeft}>
                        { }
                    </Card>
                </div>
                <div className="flex justify-between">
                    <Card style={CardStyleRightBottom}>
                        { }
                    </Card>
                </div>
                <div className="flex justify-between">
                    <Card style={CardStyleRight}>
                        { }
                    </Card>
                </div>
                <div className="flex justify-between">
                    <Card style={CardStyleLeftBottom}>
                        { }
                    </Card>
                </div>
            </div>
        </div>
    )
}