import React from "react";
import estilos from "./Counter.module.css";

const CounterPresentation = ({ sumar, restar, contador, onAdd }) => {
  return (
    <div>
      <div
        style={{
          background: "rgba(0, 0, 0, 0.15)",
          display: "inline-block",
          padding: "10px",
          margin: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={sumar} className={estilos.btnSumarRestar}>
            +
          </button>
          <h3>{contador}</h3>
          <button onClick={restar} className={estilos.btnSumarRestar}>
            -
          </button>
        </div>

        <button
          onClick={() => onAdd(contador)}
          className={estilos.btnAgregarAlCarrito}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CounterPresentation;
