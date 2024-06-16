import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store";
import {
  getCurrentPicture,
  clearOnePicture,
} from "../store/slices/pictures-slice";

import CurrentArticle from "../components/current-article";

const ArticlePage: FC = () => {
  const { pictureId } = useParams<{ pictureId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pictureId) {
      dispatch(getCurrentPicture(pictureId));
    }
  }, [dispatch, pictureId]);

  const { id, urls, alt_description } = useAppSelector(
    (state) => state.pictures.currentPicture
  );

  const returnHandler = (): void => {
    navigate("/");
    dispatch(clearOnePicture());
  };

  return (
    <>
      <button onClick={() => returnHandler()}>Вернуться</button>
      <CurrentArticle id={id} urls={urls} alt_description={alt_description} />
    </>
  );
};

export default ArticlePage;
