import { useEffect } from "react";
import { useAppDispatch } from "./store";
import { getPictures } from "./store/slices/pictures-slice";
import Card from "./components/ui/card";

const App = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getPictures());
  // }, [dispatch]);

  return <Card />;
};

export default App;
