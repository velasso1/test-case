import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import pictures from "./slices/pictures-slice";

const rootReducer = combineReducers({
  picturtes: pictures,
});

const resultConfigureStore = configureStore({
  reducer: rootReducer,
});

export default resultConfigureStore;

export type AppDispatch = typeof resultConfigureStore.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
