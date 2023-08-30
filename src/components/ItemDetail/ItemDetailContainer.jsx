import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    //doc recibe 2 parametros, 1-busca el documento que esta en (itemcolecction) y buscalo con el id
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      html: `Se agrego el producto ${product.title} al carrito`,
      timer: 20000,
      toast: true,
      timerProgressBar: true,
      showCancelButton: true,
      cancelButtonText: `Seguir navegando`,
      confirmButtonText: `Ir al carrito`,
      showCloseButton: true,
      willOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.addEventListener("click", () => {
          // Realizar la navegación utilizando el hook useNavigate
          navigate("/cart");
        });
      },
      willClose: () => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.removeEventListener("click", () => {
          // Eliminar el evento para evitar fugas de memoria
          navigate("/cart");
        });
      },
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
