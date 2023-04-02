import { Card } from "../../components/card/Card"
import { CardElement } from "../../components/cardElement/cardElement";
import MainMenu from "../mainMenu"
import './main.css';
import { CardStyle } from "./navStyle";

export const Main = () => {
    return (
        <div>
            <div>
                <MainMenu>
                </MainMenu>
            </div>
            <div className="main grid grid-rows-3 grid-flow-col gap-52 place-items-center-stretch h-96">
                <div className="mt-5">
                    <Card style={CardStyle}>
                        <CardElement data="test" /> 
                    </Card>
                </div>
                <div className="mt-5">
                    <Card style={CardStyle}>
                        <CardElement data="test" />
                    </Card>
                </div>
                <div className="mt-5">
                    <Card style={CardStyle}>
                        <CardElement data="test" />
                    </Card>
                </div>
                <div className="mt-5">
                    <Card style={CardStyle}>
                        <CardElement data="test" />
                    </Card>
                </div>
                <div className="mt-5">
                    <Card style={CardStyle}>
                        <CardElement data="test" />
                    </Card>
                </div>
                <div className="mt-5">
                    <Card style={CardStyle}>
                        <CardElement data="test" />
                    </Card>
                </div>
            </div>
        </div>
    )
}