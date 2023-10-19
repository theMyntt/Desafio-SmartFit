import React from "react";
import "./style.css";

import hour from "../../assets/png/icon-hour.png";

const Season = () => {
  return (
    <div className="main-container">
      <div className="list-hour">
        <div className="hour-refactor">
          <img src={hour} width="30px" className="icon-space" alt="clock" />
          <span id="icon-label">Horário</span>
        </div>
        <div className="ul-hours">
          <h2 id="ul-heading">Qual período quer treinar?</h2>
          <div className="ul-opt">
            <div className="ul-flex">
              <label>
                <input
                  type="radio"
                  name="hour"
                  value="manha"
                  className="icon-space"
                />{" "}
                Manhã
              </label>
              <span>06:00 às 12:00</span>
            </div>
            <div className="ul-flex">
              <label>
                <input
                  type="radio"
                  name="hour"
                  value="tarde"
                  className="icon-space"
                />{" "}
                Tarde
              </label>
              <span>12:01 às 18:00</span>
            </div>
            <div className="ul-flex">
              <label>
                <input
                  type="radio"
                  name="hour"
                  value="noite"
                  className="icon-space"
                />{" "}
                Noite
              </label>
              <span>18:01 às 23:00</span>
            </div>
          </div>
        </div>
        <div className="list-footer">
          <div className="list-flex">
            <div id="seeClosed">
              <label id="seeClosed"><input type="checkbox" id="checkInput"/> Exibir unidades fechadas</label>
            </div>
            <span>
              Resultados encontrados: <span>0</span>
            </span>
          </div>
        </div>
        <div className="list-footer" id="btnSelect">
          <button className="btn" id="btn1">ENCONTRAR UNIDADE</button>
          <button className="btn" id="btn2">LIMPAR</button>
        </div>
      </div>
    </div>
  );
};

export default Season;