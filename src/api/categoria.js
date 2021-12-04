import React, { Fragment, useEffect, useState } from "react";

const Categoria = () => {
  const urlc = "http://localhost:5000/categorias";
  const [cat, setcat] = useState([]);

  const fetchAppCategoria = () => {
    fetch(urlc)
      .then((responde) => responde.json())
      .then((data) => setcat(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchAppCategoria(urlc);
  }, []);

  return (
    <Fragment>
      {cat.map((itemC, index) => (
        <option key={index} value={itemC.id}>
          {itemC.categoria}
        </option>
      ))}
    </Fragment>
  );
};

export default Categoria;
