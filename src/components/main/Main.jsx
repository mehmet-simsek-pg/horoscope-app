import "./Main.scss";
import Card from "./Card";
import "./Main.scss";
import { data } from "../../helpers/data";

const Main = () => {
  return (
    <main className="card-container">
      {data.map((item) => (
        <Card {...item} />
      ))}
    </main>
  );
};

export default Main;
