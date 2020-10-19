import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import appReducers from "./reducer/index";
import { createStore } from "redux";

const client = new ApolloClient({
  uri: "https://ion-movies.herokuapp.com/",
});
const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
