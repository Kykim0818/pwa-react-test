import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ErrorPage } from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// TODO : 현재 도메인이 /pwa-react-test라 반드시 붙여야하는지? 확인 필요
const router = createBrowserRouter([
  {
    path: "/pwa-react-test",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pwa-react-test/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pwa-react-test/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
