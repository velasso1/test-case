import { FC } from "react";
import GarbagePicture from "../../pictures/garbage.svg";

const Garbage: FC = () => {
  return (
    <>
      <img className="card__garbage" src={GarbagePicture} alt="garbage" />
    </>
  );
};

export default Garbage;
