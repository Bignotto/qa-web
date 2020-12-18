import React from "react";
import { Link } from "react-router-dom";

import { FiArrowLeftCircle } from "react-icons/fi";
import "./styles.css";
import logo from "../../assets/logo.svg";

const Result: React.FC = () => {
  return (
    <div id="page-result">
      <header>
        <img src={logo} alt="Quey Audience" />
        <div className="back-link">
          <Link to="/">
            <FiArrowLeftCircle size="24" />
            Voltar
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Result;
