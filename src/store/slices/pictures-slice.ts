import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index.ts";
import { ICardProps } from "../../types/card-props.tsx";

interface IPictureState {
  pictures: ICardProps[],
  currentPicture: ICardProps,
}

const initialState: IPictureState = {
  pictures: [],
  currentPicture: {
    id: '',
    urls: {
      full: '',
      raw: '',
      regular: '',
    },
    alt_description: '',
  },
};

const pictures = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    picturesReceived(state: IPictureState, action: PayloadAction<ICardProps[]>) {
      state.pictures = action.payload;
    },
    onePictureReceived(state: IPictureState, action: PayloadAction<ICardProps>) {
      state.currentPicture = action.payload;
    },
    clearOnePicture(state: IPictureState) {
      state.currentPicture = initialState.currentPicture;
    }
  },
});

// Actions

export const getPictures = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    await fetch(
      `https://api.unsplash.com/photos/?client_id=${
        import.meta.env.VITE_API_KEY
      }`
    ).then((resp) =>
      resp.json().then((data) => dispatch(picturesReceived(data)))
    );
  };  
};

// get one picture by id
export const getCurrentPicture = (id: string) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    await fetch(`https://api.unsplash.com/photos/${id}/?client_id=${
      import.meta.env.VITE_API_KEY
    }`
  ).then((resp) => 
    resp.json().then((data) => dispatch(onePictureReceived(data))))
  }
}

export const { picturesReceived, onePictureReceived, clearOnePicture } = pictures.actions;

export default pictures.reducer;
