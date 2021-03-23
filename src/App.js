import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/store";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <DashBoard />
    </Provider>
  );
}

export default App;
