import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Cart.module.css";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductId,
  total,
  navigate,
}) => {
  return (
    <div className={estilos.contenedor}>
      {cart.length > 0 ? (
        <div>
          <h1 className={estilos.tituloPrincipal}>
            Productos agregados al carrito:
          </h1>
          {cart.map((product) => {
            return (
              <div
                key={product.id}
                style={{ border: "2px solid red" }}
                className={estilos.contenedorTarjeta}
              >
                <img
                  src={product.img}
                  alt={product.alt}
                  className={estilos.img}
                />
                <div style={{ textAlign: "center" }}>
                  <h3 className={estilos.titulo}>{product.title}</h3>
                  <h3 className={estilos.description}>{product.description}</h3>
                </div>
                <div className={estilos.contenedorDerecha}>
                  <h4 className={estilos.stock}>
                    Cantidad disponible: {product.stock}
                  </h4>
                  <h4 className={estilos.cantidad}>
                    Cantidad elegida: {product.quantity}
                  </h4>
                  <h4 className={estilos.precio}>ARS ${product.price}</h4>
                  <button
                    onClick={() => {
                      deleteProductId(product.id);
                    }}
                    className={estilos.botones}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <div className={estilos.contenedorVaciarComprar}>
              <button onClick={clearCartWithAlert} className={estilos.botones}>
                Vaciar carrito
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className={estilos.botones}
              >
                Terminar compra
              </button>
            </div>
            <div>
              <h1 className={estilos.totalCarrito}>
                Suma total de los productos: ${total}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className={estilos.titulo}>
            No hay ningun producto agregado al carrito
          </h1>
          <Link to="/">
            <button className={estilos.botones}>Agregar productos</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
