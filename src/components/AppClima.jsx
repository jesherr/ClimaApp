import React from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spiner from "./Spiner";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado, carga, noResultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {carga ? (
          <Spiner />
        ) : resultado?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El clima se va mostrar aqui</p>
        )}
      </main>
    </>
  );
};

export default AppClima;

// ?. opcional change
