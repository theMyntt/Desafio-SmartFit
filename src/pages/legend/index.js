import React from "react";

import forbiddenFountain from "../../assets/png/forbidden-fountain.png";
import partialFountain from "../../assets/png/partial-fountain.png";

import forbiddenLockerroom from "../../assets/png/forbidden-lockerroom.png";
import partialLockerroom from "../../assets/png/partial-lockerroom.png";
import requiredLockerroom from "../../assets/png/required-lockerroom.png";

import recommendedTowel from "../../assets/png/recommended-towel.png";
import requiredTowel from "../../assets/png/required-towel.png";

import recommendedMask from "../../assets/png/recommended-mask.png";
import requiredMask from "../../assets/png/required-mask.png";

import "./style.css";

const Legend = () => {
  return (
    <div className="main-container">
      <div className="legend">
        <div className="legend-section">
          <h3>Máscara</h3>
          <div className="legend-section-icons">
            <div className="legend-text-center">
                <img src={requiredMask} alt="Mascara obrigatória" />
                <p>Obrigatório</p>
            </div>
            <div className="legend-text-center">
                <img src={recommendedMask} alt="Mascara recomendada" />
                <p>Recomendado</p>
            </div>
          </div>
        </div>
        <div className="legend-section">
          <h3>Toalha</h3>
          <div className="legend-section-icons">
            <div className="legend-text-center">
              <img src={requiredTowel} alt="Toalha obrigatória" />
              <p>Obrigatório</p>
            </div>
            <div className="legend-text-center">
              <img src={recommendedTowel} alt="Toalha recomendada" />
              <p>Recomendado</p>
            </div>
          </div>
        </div>
        <div className="legend-section">
          <h3>Bebedouro</h3>
          <div className="legend-section-icons">
            <div className="legend-text-center">
              <img src={partialFountain} alt="Bebedouro parcial" />
              <p>Parcial</p>
            </div>
            <div className="legend-text-center">
              <img src={forbiddenFountain} alt="Bebedouro proibido" />
              <p>Proibido</p>
            </div>
          </div>
        </div>
        <div className="legend-section">
          <h3>Vestiários</h3>
          <div className="legend-section-icons">
            <div className="legend-text-center">
              <img src={requiredLockerroom} alt="Vestuário liberado" />
              <p>Liberado</p>
            </div>
            <div className="legend-text-center">
              <img src={partialLockerroom} alt="Vestuário parcial" />
              <p>Parcial</p>
            </div>
            <div className="legend-text-center">
              <img src={forbiddenLockerroom} alt="Vestuário fechado" />
              <p>Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
