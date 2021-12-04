import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import auto from "../../img/auto.png";
import { api } from "../../api/api";

const Banner = () => {
  return (
    <div className="banner">
      <img src={auto} alt="" />
      <h1 className="banner__slogan">Encuentra el auto de tus sueños</h1>
    </div>
  );
};

const Formulario = (props) => {
  const { marcas, onSubmit = () => {} } = props;
  const [modelos, setModelos] = useState([]);
  const [form, setForm] = useState({
    search: "",
    brand: "",
    model: "",
    year_from: "",
    year_to: "",
    price: "",
  });

  function validateForm() {
    return (
      !!form.search.length &&
      !!form.brand.length &&
      !!form.model.length &&
      !!form.year_from.length &&
      !!form.year_to.length &&
      !!form.price.length
    );
  }

  useEffect(() => {
    setModelos(marcas.filter((marca) => marca.id == form.brand));
  }, [form.brand]);

  useEffect(() => {
    const params = new URLSearchParams();
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
    <Fragment>
      <div className="form1">
        <div className="form1__option">
          <button>Todos</button>
          <button>Nuevos</button>
          <button>Usados</button>
        </div>

        <form
          className="form1__filtro"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(form);
          }}
        >
          <div className="form1__buscar">
            <input
              type="text"
              placeholder="Buscar auto"
              className="form1__buscar__frm-buscar"
              value={form.search}
              onChange={(e) =>
                setForm((state) => ({ ...state, search: e.target.value }))
              }
            />
            <select
              name="marca"
              id="marca"
              value={form.brand}
              onChange={(e) => {
                setForm((state) => ({ ...state, brand: e.target.value }));
              }}
            >
              <option value="">Escoge tu marca</option>
              {marcas.map((marca) => {
                // return <Marc />;
                return (
                  <option key={marca.id} value={marca.id}>
                    {marca.marca}
                  </option>
                );
              })}
            </select>
            <select
              name="modelo"
              id="modelo"
              disabled={!form.brand.length}
              onChange={(e) => {
                setForm((state) => ({ ...state, model: e.target.value }));
              }}
            >
              <option value="0">Escoge tu modelo</option>
              {/* <Modelo /> */}
              {!!modelos.length &&
                modelos[0].modelos.map((modelo, id) => (
                  <option key={id} value={modelo}>
                    {modelo}
                  </option>
                ))}
            </select>
          </div>

          <div className="form1__periodo">
            <label htmlFor="anio">Año</label>
            <input
              className="form1__periodo__num"
              type="date"
              placeholder="Desde"
              onChange={(e) => {
                setForm((state) => ({ ...state, year_from: e.target.value }));
              }}
            />
            <input
              className="form1__periodo__num"
              type="date"
              placeholder="Hasta"
              onChange={(e) => {
                setForm((state) => ({ ...state, year_to: e.target.value }));
              }}
            />

            <label htmlFor="rango" className="form1__periodo__espacio">
              Rango de precio S/.
            </label>
            <input
              type="range"
              name="rango"
              id="rango"
              min="10000"
              max="500000"
              step="5000"
              onChange={(e) => {
                setForm((state) => ({ ...state, price: e.target.value }));
              }}
            />

            <button disabled={!validateForm()}>BUSCAR</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const marcas = useSelector((state) => state.car.cars);

  function Search() {
    history.push({
      pathname: `/buscar-auto`,
      search: window.location.search,
    });
  }

  const fetchMarca = () => {
    api
      .get("/marcas")
      .then(({ data: cars }) => {
        dispatch({
          type: "SET_CARS",
          payload: cars,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMarca();
  }, []);

  return (
    <main>
      <Banner />
      <Formulario
        marcas={marcas}
        onSubmit={(payload) => {
          Search(payload);
        }}
      />
    </main>
  );
};

export default Home;
