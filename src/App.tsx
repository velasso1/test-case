// import { useEffect } from "react";
// import { useAppDispatch } from "./store";
// import { getPictures } from "./store/slices/pictures-slice";
// import Card from "./components/ui/card";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import StartPage from "./pages/start-page";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </>
  );
};

export default App;
