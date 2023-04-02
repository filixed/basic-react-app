import { Card } from "../../components/card/Card";
import { CardElement } from "../../components/cardElement/cardElement";
import MainMenu from "../mainMenu";
import "./main.css";

export const Main = () => {
  return (
    <div>
      <div className="container">
      <div className="menu">
        <MainMenu />
      </div>
      <div className="content">
        <Card className="card-450">
          <CardElement data="test" />
        </Card>
        <Card className="card-450">
          <CardElement data="test" />
        </Card>
        <Card className="card-450">
          <CardElement data="test" />
        </Card>
        <Card className="card-450">
          <CardElement data="test" />
        </Card>
        <Card className="card-450">
          <CardElement data="test" />
        </Card>
        <Card className="card-450">
          <CardElement data="test" />
        </Card>
      </div>
    </div>
    </div>
  );
};
