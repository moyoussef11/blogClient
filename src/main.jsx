import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import { store } from "./rtk/store.js";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <CookiesProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </CookiesProvider>
  </StrictMode>
);
