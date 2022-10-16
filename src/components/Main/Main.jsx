import "./Main.css";
import Card from "../Card/Card";
import data from "../../helper/data";

const Main = () => {
  return (
    <div className="container">
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default Main;
