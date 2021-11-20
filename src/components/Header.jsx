import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";

const Header = ({ handleSubmit, history }) => {
  return (
    <div>
      <h1>Buscador de Imagenes</h1>
      <Form handleSubmit={handleSubmit} history={history}/>
      <Navbar/>
    </div>
  );
};

export default Header;
