import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState } from "../../types/pictures-slice-state";
import { AppDispatch } from "../index.ts";

const initialState = {
  pictures: [],
  currentPicture: '',
};

const pictures = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    picturesReceived(state: IinitialState, action: PayloadAction<object[]>) {
      state.pictures = action.payload;
    },
    alonePictureReceived(state: IinitialState, action: PayloadAction<string>) {
      state.currentPicture = action.payload;
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

export const getCurrentPicture = (id: string) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    await fetch(`https://api.unsplash.com/photos/${id}/?client_id=${
      import.meta.env.VITE_API_KEY
    }`
  ).then((resp) => 
    resp.json().then((data) => dispatch(alonePictureReceived(data))))
  }
}

export const { picturesReceived, alonePictureReceived } = pictures.actions;

export default pictures.reducer;
