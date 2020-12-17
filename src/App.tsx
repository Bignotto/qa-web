import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
// import AppProvider from "./hooks";

import "./styles/global.css";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
