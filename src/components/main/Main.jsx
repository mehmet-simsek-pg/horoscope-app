import Card from "./Card";
import data from "../../helper/data";
import "./Main.scss";

const Main = () => {
  return (
    <main className="card-container">
      <Card data={data} />
    </main>
  );
};

export default Main;
