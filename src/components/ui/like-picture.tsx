import { FC, useState } from "react";
import LikeImage from "../../pictures/like.svg";

const Like: FC = () => {
  const [color, setColor] = useState("0");

  const colorHandler = (): void => {
    setColor(color === "0" ? "350" : "0");
  };

  return (
    <>
      <img
        onClick={() => colorHandler()}
        className="card__picture"
        src={LikeImage}
        alt="like"
        style={{ filter: `saturate(${color}%)` }}
      />
    </>
  );
};

export default Like;
