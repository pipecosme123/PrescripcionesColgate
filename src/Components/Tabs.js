import { useState } from "react";
import "../css/App.css";
import Prescripcion from "./Prescripcion";
import { Productos_Especializados, Productos_Ortodoncia, Productos_RégimenDiario, Productos_Hipersensibilidad_Dental, Productos_Blanqueaminto_Dental } from "../Constants/Product"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    if (window.screen.width <= 480) {
      window.scroll({
        top: 56 * 4,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs tabs1" : "tabs"} onClick={() => toggleTab(1)}>
          <p>{Productos_Especializados.shortTitle}</p>
        </button>

        <button className={toggleState === 2 ? "tabs active-tabs tabs2" : "tabs"} onClick={() => toggleTab(2)}>
          {Productos_Ortodoncia.shortTitle}
        </button>

        <button className={toggleState === 3 ? "tabs active-tabs tabs3" : "tabs"} onClick={() => toggleTab(3)}>
          {Productos_RégimenDiario.shortTitle}
        </button>

        <button className={toggleState === 4 ? "tabs active-tabs tabs4" : "tabs"} onClick={() => toggleTab(4)}>
          {Productos_Hipersensibilidad_Dental.shortTitle}
        </button>

        <button className={toggleState === 5 ? "tabs active-tabs tabs5" : "tabs"} onClick={() => toggleTab(5)}>
          {Productos_Blanqueaminto_Dental.shortTitle}
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content content1 active-content" : "content"}>
          <h2>{Productos_Especializados.title}</h2>
          <Prescripcion data={Productos_Especializados}></Prescripcion>
        </div>

        <div
          className={toggleState === 2 ? "content content2 active-content" : "content"}>
          <h2>{Productos_Ortodoncia.title}</h2>
          <Prescripcion data={Productos_Ortodoncia}></Prescripcion>
        </div>

        <div
          className={toggleState === 3 ? "content content3 active-content" : "content"}>
          <h2>{Productos_RégimenDiario.title}</h2>
          <Prescripcion data={Productos_RégimenDiario}></Prescripcion>
        </div>

        <div
          className={toggleState === 4 ? "content content4 active-content" : "content"}>
          <h2>{Productos_Hipersensibilidad_Dental.title}</h2>
          <Prescripcion data={Productos_Hipersensibilidad_Dental}></Prescripcion>
        </div>

        <div
          className={toggleState === 5 ? "content content5 active-content" : "content"}>
          <h2>{Productos_Blanqueaminto_Dental.title}</h2>
          <Prescripcion data={Productos_Blanqueaminto_Dental}></Prescripcion>
        </div>

      </div>
    </div>
  );
}

export default Tabs;