import { TextField } from "@mui/material";
import React from "react";
import estilos from "./FormCheckout.module.css";

const FormCheckout = ({
  handleSubmit,
  handleChange,
  errors,
  todosInputCompletados,
}) => {
  return (
    <div className={estilos.contenedor}>
      <h1 className={estilos.titulo}>
        Rellene con sus datos para completar la compra:
      </h1>
      <form className={estilos.contenedorInput} onSubmit={handleSubmit}>
        <p>Nombre:</p>
        <TextField
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
          name="nombre"
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
          className={estilos.input}
        />
        <p>Email:</p>
        <TextField
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          error={errors.email ? true : false}
          helperText={errors.email}
          className={estilos.input}
        />
        <p>Telefono:</p>
        <TextField
          type="number"
          placeholder="Telefono"
          onChange={handleChange}
          name="telefono"
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
          className={estilos.input}
        />
        <p>Contraseña:</p>
        <TextField
          placeholder="Contraseña"
          onChange={handleChange}
          name="contraseña"
          error={errors.contraseña ? true : false}
          helperText={errors.contraseña}
          className={estilos.input}
        />
        <p>Confirmar contraseña:</p>
        <TextField
          placeholder="Confirmar contraseña"
          onChange={handleChange}
          name="confirmarContraseña"
          error={errors.confirmarContraseña ? true : false}
          helperText={errors.confirmarContraseña}
          className={estilos.input}
        />
        <button
          onClick={todosInputCompletados}
          className={estilos.boton}
          type="submit"
        >
          Comprar
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
