// main entry file (e.g., index.js)
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import "./index.css";
import App from "./App.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import InterestSelection from "./components/Options/InterestedSelection.jsx";
import { SelectedCategoriesProvider } from './components/context/SelectedCategoriesContext'; // Import your context provider
import NewsDisplay from "./components/NewsPage/NewsDisplay.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <MainPage />,
  },
  {
    path: "/news",
    element: <NewsDisplay/>
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <InterestSelection />, // home page
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SelectedCategoriesProvider> {/* Wrap with context provider */}
        <RouterProvider router={router} />
      </SelectedCategoriesProvider>
    </Provider>
  </React.StrictMode>
);
