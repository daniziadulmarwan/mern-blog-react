import React from "react";
import { Provider } from "react-redux";
import { Routes, store } from "../configs";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
