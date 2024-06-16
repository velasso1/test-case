import { FC } from "react";
import Card from "./ui/card";
import { ICardProps } from "../types/card-props";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../store";
import { RootState } from "../store";

const CardList: FC = () => {
  const cardInfo: ICardProps[] = useAppSelector(
    (state: RootState) => state.pictures.pictures
  );

  return (
    <div className="card-list">
      {!cardInfo.length || !cardInfo ? (
        <div>Loading...</div>
      ) : (
        cardInfo.map((item: ICardProps) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              urls={item.urls}
              alt_description={item.alt_description}
            />
          );
        })
      )}
    </div>
  );
};

export default CardList;
