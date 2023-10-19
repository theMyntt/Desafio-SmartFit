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
          <h2>Qual período quer treinar?</h2>
          <div className="ul-opt">
            <div>
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
            
            <div>
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
            
            <div>
              <label id="opt-lastC">
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
      </div>
    </div>
  );
};

export default Season;
