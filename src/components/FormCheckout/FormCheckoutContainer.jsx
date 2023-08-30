import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import swal from "sweetalert2";
import estilos from "./FormCheckout.module.css";
import { Link } from "react-router-dom";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");
    //addDoc recibe dos parametros 1 a que coleccion queres agregar el docu, 2 que doc queres agegar a la coleccion
    addDoc(orderCollection, dataOrder).then((res) => setOrderId(res.id));
    //updatedoc 3 parametros, 1- de que base de datos queres actualizar el doc 2- de que coleccion queres actualizar el doc 3-y cual doc queres actualizar (id)
    //doc lleva 2 cosas 1-acceso al doc () 2- un obj que yo quiera modificar {}
    //updateDoc(doc(db, "products", ""), {stock: stock - quantity} );

    cart.map((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });

    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      contraseña: "",
      confirmarContraseña: "",
    },
    onSubmit: checkoutFn,
    //esquema de validacion, para validar los input, que email contenga arroba etc
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(3, "el nombre debe tener al menos 3 caracteres")
        .max(10, "el nombre debe contener menos de 10 caracteres"),
      telefono: Yup.string().required("este campo es obligatorio"),
      email: Yup.string()
        .email("el campo debe ser un email")
        .required("este campo es obligatorio"),
      contraseña: Yup.string()
        .required("este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "la contraseña debe tener al menos 6 caracteres como minimo y 15 como máximo, 1 caracter mayúsculas, 1 minúscula, y 1 número ",
        }),
      confirmarContraseña: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("contraseña")], "las contraseñas no coinciden"),
    }),
    validateOnChange: false, //para que no aparezca el error apenas escribis y que sea cuando se envie el formulario
  });
  const todosInputCompletados = () => {
    values.nombre &&
      values.email &&
      values.telefono &&
      values.contraseña &&
      values.confirmarContraseña &&
      Object.keys(errors).length === 0 &&
      swal.fire({
        position: "center",
        title: "Compra realizada exitosamente",
        timer: 10000,
        timerProgressBar: true,
        backdrop: true,
      });
  };

  return (
    <div>
      {orderId ? (
        <div className={estilos.ordenDeCompra}>
          <div>
            <h1>Su orden de compra es: {orderId}</h1>
          </div>
          <div>
            <br></br>
            <hr />
            <br></br>
            <Link to="/" className={estilos.boton}>
              Volver a inicio
            </Link>
          </div>
        </div>
      ) : (
        <FormCheckout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          todosInputCompletados={todosInputCompletados}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
