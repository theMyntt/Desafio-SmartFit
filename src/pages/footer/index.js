import React from "react";

import logo from "../../assets/svg/logo.svg";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-separator"></div>
      <div className="footer">
        <img src={logo} alt="logo" id="logo-footer"/>
        <br />
        <p id="rightWeb">Todos os direitos reservados - 2020</p>
      </div>
    </div>
  );
};

export default Footer;
