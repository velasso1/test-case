import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import "./scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>    
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
