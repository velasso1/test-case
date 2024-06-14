import { FC } from "react";
import Like from "./like-picture";
import Garbage from "./garbage-picture";

const Card: FC = () => {
  return (
    <div className="card">
      <div className="card__image"></div>
      <div className="card__about"></div>
      <div className="card__interactive">
        <Like />
        <Garbage />
      </div>
    </div>
  );
};

export default Card;
