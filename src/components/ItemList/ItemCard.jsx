import React from "react";
import estilos from "./ItemList.module.css";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className={estilos.containerCard}>
      <img className={estilos.imgCard} src={item.img} alt={item.alt} />
      <div className={estilos.title}>
        <h3>{item.title}</h3>
      </div>
      <div className={estilos.description}>
        <h4>{item.description}</h4>
      </div>
      <div className={estilos.price}>
        <p>${item.price}</p>
      </div>
      <div className={estilos.btn}>
        <Link to={`/itemDetail/${item.id}`}>
          <button>Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
