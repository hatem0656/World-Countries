import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import regionReducer from "./features/region";
import searchReducer from "./features/search";
import countriesReducer from "./features/countries";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    region: regionReducer,
    search: searchReducer,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
