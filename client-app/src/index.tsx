import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./app/layout/styles.css";
import reportWebVitals from "./reportWebVitals";
import { StoreContext, store } from "./app/api/stores/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";
import { StrictMode, Suspense } from "react";
import { LoadingComponent } from "./app/layout/LoadingComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <Suspense fallback={<LoadingComponent />}>
        <RouterProvider router={router} />
      </Suspense>
    </StoreContext.Provider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
