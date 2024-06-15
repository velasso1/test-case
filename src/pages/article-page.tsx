import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../store";
import { getCurrentPicture } from "../store/slices/pictures-slice";
import { RootState } from "@reduxjs/toolkit/query";
import CurrentArticle from "../components/current-article";
import { useSelector } from "react-redux";

const ArticlePage: FC = () => {

    const {id} = useParams<{id?: string}>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(getCurrentPicture(id));
    }, [dispatch, id])

    // const cardInfo = useSelector((state: RootState) => state.pictures.currentPicture);

    return (
    <>
     <button onClick={() => navigate('/')}>Вернуться</button>
        {/* <CurrentArticle /> */}
    </>
    );
}
 
export default ArticlePage;