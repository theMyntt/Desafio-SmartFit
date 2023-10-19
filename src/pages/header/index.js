import React from "react";
import logo from "../../assets/svg/logo.svg";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} id="header-logo" alt="logo"/>
      </div>
      <div className="header-container main-container">
        <h1>
          REABERTURA <br /> SMART FIT
        </h1>
        <div className="header-container-divisior"></div>
        <p>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
    </div>
  );
};

export default Header;
