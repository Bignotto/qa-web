import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Routes from "./routes";
// import AppProvider from "./hooks";

import "./styles/global.css";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
