import React, { useEffect, useState } from "react";
// import Marc from "../../api/marca";
// import Cards from "../../api/apicard";
// import Modelo from "../../api/modelo";
// import Categoria from "../../api/categoria";
import { useSelector } from "react-redux";
import { Car } from "./components/car";
import { api } from "../../api/api";
import "boxicons";

const BcrAuto = () => {
  const cars = useSelector((state) => state.car.cars_offers);
  const [queryString, setQueryString] = useState(null);
  const [offers, setOffers] = useState([]);
  const [form, setForm] = useState({
    ubication: "",
    search: "",
    brand: "",
    model: "",
    year_from: "",
    year_to: "",
    price: "",
  });
  const marcas = useSelector((state) => state.car.cars);
  const [modelos, setModelos] = useState([]);

  function getOffertas(payload) {
    console.log("aca se envio la busqueda con las variables", payload);
    api.get("/ofertas").then(({ data }) => {
      setOffers(data);
      // dispatch({
      //   type: "SET_CARS_OFFERS",
      //   payload: data,
      // });
      // history.push("/buscar-auto");
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    getOffertas(queryString);
  }

  useEffect(() => {
    if (!queryString) {
      const querystring = window.location.search;
      const params = new URLSearchParams(querystring);
      setQueryString(params);
    }

    if (queryString) {
      getOffertas(queryString);
      setForm((state) => {
        return {
          ...state,
          search: queryString.get("search"),
          brand: queryString.get("brand"),
          model: queryString.get("model"),
          year_from: queryString.get("year_from"),
          year_to: queryString.get("year_to"),
          price: queryString.get("price"),
        };
      });
    }
  }, [queryString]);

  useEffect(() => {
    setModelos(marcas.filter((marca) => marca.id === form.brand));
  }, [form.brand]);

  useEffect(() => {
    const querystring = window.location.search;
    const params = new URLSearchParams(querystring);
    params.set("search", form.search);
    params.set("brand", form.brand);
    params.set("model", form.model);
    params.set("year_from", form.year_from);
    params.set("year_to", form.year_to);
    params.set("price", form.price);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }, [form]);

  return (
    <div className="main_buscar_auto">
      <div className="filtro">
        <form onSubmit={onSubmit}>
          <div className="filtro__titulo">
            <div>Ubicación</div>
            <div>
              <select className="filtro__titulo__selects">
                <option value="0">--Seleccione--</option>
                <option value="1" selected>
                  Lima
                </option>
              </select>
            </div>
          </div>
          <div className="filtro__titulo">
            <div>Marca</div>
            <div>
              <select
                id="modelo"
                className="filtro__titulo__selects"
                value={form.brand}
                onChange={(e) => {
                  setForm((state) => ({ ...state, brand: e.target.value }));
                }}
              >
                <option value="0">Escoge tu marca</option>
                {marcas.map((marca) => {
                  // return <Marc />;
                  return (
                    <option key={marca.id} value={marca.id}>
                      {marca.marca}
                    </option>
                  );
                })}
                {/* <Marc /> */}
              </select>
            </div>
          </div>
          <div className="filtro__titulo">
            <div>Modelo</div>
            <div>
              <select
                className="filtro__titulo__selects"
                disabled={!form.brand.length}
                onChange={(e) => {
                  setForm((state) => ({ ...state, model: e.target.value }));
                }}
              >
                <option value="0">Escoge tu modelo</option>
                {!!modelos.length &&
                  modelos[0].modelos.map((modelo, id) => (
                    <option key={id} value={modelo}>
                      {modelo}
                    </option>
                  ))}
                {/* <Modelo /> */}
              </select>
            </div>
          </div>
          <div className="filtro__titulo">
            <div>Año</div>
            <div>
              <select className="filtro__titulo__selects">
                <option value="0">Desde</option>
                <option value="2010">2010</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div>
              <select className="filtro__titulo__selects">
                <option value="0">Hasta</option>
                <option value="2010">2010</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          <div className="filtro__titulo">
            <div>Categoria</div>
            <div>
              <select className="filtro__titulo__selects">
                <option value="0">Escoge tu Categoria</option>
                { <Categoria /> }
              </select>
            </div>
          </div>

          <hr />

          <div className="filtro__titulo">
            <div>Precio</div>
            <div>
              <input
                type="text"
                className="filtro__titulo__inputs"
                placeholder="S/. 10000"
              />
            </div>
            <div>a</div>
            <div>
              <input
                type="text"
                className="filtro__titulo__inputs"
                placeholder="S/. 500000"
              />
            </div>
          </div>

          <hr />
          <div className="filtro__titulo">
            <div>Kilometraje</div>
            <div>
              <input
                type="text"
                className="filtro__titulo__inputs"
                placeholder="0"
              />
            </div>
            <div>a</div>
            <div>
              <input
                type="text"
                className="filtro__titulo__inputs"
                placeholder="200.000"
              />
            </div>
          </div>
          <div className="filtro__filtrar">
            <button>BUSCAR</button>
          </div>
        </form>
      </div>

      <div className="container">
        {offers.map((car) => {
          return <Car {...car} />;
        })}
        {/* {queryString.get("search")}
        {queryString.get("brand")} */}
        {/* <Cards /> */}
      </div>
    </div>
  );
};

export default BcrAuto;
