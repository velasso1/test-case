import { FC, useState } from "react";
import { ICardProps } from "../../types/card-props";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../../pictures/placeholder.webp";

import Like from "./like-picture";
import Garbage from "./garbage-picture";

const Card: FC<ICardProps> = ({ id, urls, alt_description }) => {
  const [imageIsLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/current-card/${id}`)}>
      <div className="card__id">ID: {id}</div>
      <div className="card__image">
        <img
          loading="lazy"
          src={imageIsLoading ? `${placeholderImage}` : `${urls.regular}`}
          className="card__picture"
          data-src={urls.regular}
          alt={alt_description}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="card__about">{alt_description}</div>
      <div className="card__interactive">
        <Garbage />
        <Like />
      </div>
    </div>
  );
};

export default Card;
