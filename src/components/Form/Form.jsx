import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  //el e.target.name va entre corchetes xq es un string, para elegir el nombre de un
  //obj x ej pones objeto.nombre pero cuando es un string no se puede entonces usas el corchete objeto[nombre]
  console.log(userData);

  const envioDeForm = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <h1>estoy en el formulario</h1>

      <form onSubmit={envioDeForm}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu telefono"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />

        <button type="submit">enviar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};

export default Form;
