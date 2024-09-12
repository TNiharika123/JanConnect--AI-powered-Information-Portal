// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import "./index.css";
import App from "./App.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import InterestSelection from "./components/Options/InterestedSelection.jsx";
import NewsDisplay from "./components/NewsPage/NewsDisplay.jsx";
import SchemesDisplay from "./components/schemes/SchemesDisplay.jsx";
import { TranslationProvider } from "./components/context/TranslationContext"; // Import TranslationProvider
import { SelectedCategoriesProvider } from './components/context/SelectedCategoriesContext'; // Import SelectedCategoriesProvider
import Signup from "./components/SignUp/SignUp.jsx";
import Login from "./components/Login/Login.jsx";
import LocationProvider from './components/context/LocationProvider';
import IntroPage from "./components/intro/IntroPage.jsx";
import Contact from "./components/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<IntroPage/>
  },
  {
    path: "/home",
    element: <MainPage />,
  },
  {
    path: "/news",
    element: <NewsDisplay/>
  },
  {
  path: "/culture",
  element: <SchemesDisplay/>
  },
  {
    // path: "/scheme",
    // element: <SchemesDisplay/>
  },
  {
    path: "/select",
    element: <InterestSelection />, // home page
  },
  {
    path: "/login",
    element: <Login />, // home page
  },
  {
  path: "/register",
      element: <Signup />,
  },
  {
    path: "/contact",
        element: <Contact />,
    },
  {
    path: "/interest",
    element: <InterestSelection />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/interest",
        element: <InterestSelection />, // home page
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocationProvider>
      <SelectedCategoriesProvider>
        <TranslationProvider> {/* Wrap with TranslationProvider */}
          <RouterProvider router={router} />
        </TranslationProvider>
      </SelectedCategoriesProvider>
      </LocationProvider>
    </Provider>
  </React.StrictMode>
);
