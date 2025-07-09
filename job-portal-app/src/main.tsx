import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import Store from "./Store.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  </StrictMode>
);
