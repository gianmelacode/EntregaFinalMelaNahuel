import React from "react";
import { Link } from "react-router-dom";
import estilos from "./ItemDetail.module.css";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div className={estilos.contenedor}>
      <img
        src={product.img}
        alt={product.alt}
        className={
          product.categoryName === "playstation"
            ? `${estilos.imgCardPlaystation}`
            : `${estilos.imgCard}`
        }
      />
      <div>
        <h1 className={estilos.titulos}>{product.title}</h1>
        <h3 className={estilos.descripcion}>{product.fullDescription}</h3>
        <p className={estilos.precio}>Precio: ${product.price}</p>
        {product.stock > 0 ? (
          <div>
            <CounterContainer
              stock={product.stock}
              onAdd={onAdd}
              initial={cantidadTotal}
            />
          </div>
        ) : (
          <h1
            style={{
              fontSize: "15px",
              fontFamily: "arial",
              margin: "10px",
              padding: "10px",
            }}
          >
            "No hay stock"
          </h1>
        )}
        <Link to="/">
          <div className={estilos.boton}>
            <h2>Volver al home</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
