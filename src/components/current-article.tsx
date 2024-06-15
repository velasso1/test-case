import { FC } from "react";
import { ICardProps } from "../types/card-props";

const CurrentArticle: FC<ICardProps> = ({id, urls, alt_description}) => {
    return ( 
        <div className="current-article">
            <div className="current-article__image">
                <img src={urls.regular} alt={alt_description} />
            </div>
            <div className="current-article__text"></div>
        </div> 
    );
}
 
export default CurrentArticle;