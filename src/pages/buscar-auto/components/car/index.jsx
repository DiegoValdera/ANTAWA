import { NavLink as Link } from "react-router-dom";

function Car(props) {
  const {
    // idVendedor,
    descripcion,
    // idMarca,
    marca,
    modelo,
    // categoria,
    // añomfabricacion,
    añomodelo,
    kilometraje,
    transmision,
    // combustible,
    // cilindrada,
    // numeropuertas,
    color,
    preciodolares,
    // autonuevo,
    // region,
    photos,
    // id,
  } = props;

  return (
    <div className="car-component">
      <Link exact to="/detalle">
        <div className="container__img">
          <img src={photos[0]} alt="car"/>
        </div>
      </Link>
      <div className="container__card">
        <div className="container__card__titulo">
          <div className="container__card__titulo__anio">{añomodelo}</div>
          <h3 className="container__card__titulo__marca">
            {marca} {modelo}
          </h3>
        </div>

        <div className="container__card__tipo">{transmision}</div>

        <div className="container__card__precio">
          <div>
            <box-icon type="solid" name="no-entry" color="white"></box-icon>
          </div>
          <div className="container__card__precio__precio1">$ 1,200</div> |
          <h3 className="container__card__precio__precio2">
            $ {preciodolares}
          </h3>
        </div>
        <hr />
        <div className="container__card__kilometros">
          <div>
            <box-icon type="solid" name="ev-station" color="white"></box-icon>
          </div>
          <div>{kilometraje} Kilometros</div>
        </div>
        <div className="container__card__color">
          <div>
            <box-icon name="color-fill" color="white"></box-icon>
          </div>
          <div>Exterior {color}</div>
        </div>
        <div className="container__card__descripcion">
          <div>
            <box-icon name="taxi" color="white"></box-icon>
          </div>
          <div>{descripcion}</div>
        </div>
      </div>
    </div>
  );
}

export { Car };
