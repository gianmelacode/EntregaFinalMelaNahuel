import React, { useEffect, useState } from "react";
import CounterPresentation from "./CounterPresentation";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]); //para que cuando compremos xej 3 salgamos y volvamos siga en la misma cantidad que elegimos

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        position: "center",
        title: `Stock Máximo`,
        timer: 2200,
        toast: true,
        timerProgressBar: true,
      });
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <CounterPresentation
        contador={contador}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
