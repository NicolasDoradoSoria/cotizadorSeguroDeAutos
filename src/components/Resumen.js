import React from "react";
import styled from "@emotion/styled";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h2>resumen de cotizacion</h2>
      <ul>
        <li>Marca:{marca} </li>
        <li>plan: {plan}</li>
        <li>ano de auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
