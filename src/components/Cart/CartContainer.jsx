import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductId, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      position: "center",
      title: "¿Seguro quieres vaciar todo el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se limpio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito sigue igual");
      }
    });
  };

  return (
    <div>
      <Cart
        total={total}
        cart={cart}
        deleteProductId={deleteProductId}
        getTotalPrice={getTotalPrice}
        clearCartWithAlert={clearCartWithAlert}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
