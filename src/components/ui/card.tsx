import { FC } from "react";
import Like from "../../pictures/like.svg";

const Card: FC = () => {
  return (
    <div className="card">
      <div className="card__picture">
        <img className="card__image" src={Like} alt="like" />
      </div>
      <div className="card__about"></div>
      <div className="card__interactive"></div>
    </div>
  );
};

export default Card;
