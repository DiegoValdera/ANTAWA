import { useSelector, useDispatch } from 'react-redux';
import CardCarPublish from './card-car-publicado';
import imgprueba1from from '../../img/auto.png';
import { NavLink as Link } from 'react-router-dom';
import { api } from "../../api/api";
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const CarsPublished = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const dataCarsPublished = useSelector((state) => {
    return state.publsh.cars_published;
  });

  console.log("dataCarsPublished",dataCarsPublished);

  const handleRemoveBox = async(id) =>{
    console.log(id);
    await api.delete(`/ofertas/${id.target.value}`);
  }

  const [carsDataPublished, getCarsDataPublished] = useState([]);

  const getCarsPublished = async () => {
    const CarsPublished = await api.get("/ofertas");
    return CarsPublished.data;
  }

  const userData = useSelector((state) => {
    return state.auth.userData;
  });

  return(
    <div className="main_buscar_auto_publish">
      {/* <CardCarPublish/> */}
      <div className="publishCar__wrapper">
        {Object.keys(dataCarsPublished).length == 0 ? '' : dataCarsPublished.map((e)=>{
          return(
          <div className="publishCar__data">
            <h1>Publicación</h1>
            <div>
              <div>
                <img src={e.photos[0]}/>
              </div>
              <div className="publishCar__dataInput">
                <div>
                  <h2>Marca</h2>
                  <h2>{e.marca}</h2>
                </div>
                <div>
                  <h2>Transmisión</h2>
                  <h2>{e.transmision}</h2>
                </div>
                <div>
                  <h2>Kilometraje</h2>
                  <h2>{e.kilometraje}</h2>
                </div>
                <div>
                  <h2>Modelo</h2>
                  <h2>{e.modelo}</h2>
                </div>
                <div>
                  <h2>Año de frabricación</h2>
                  <h2>{e.añomfabricacion}</h2>
                </div>
                <div>
                  <h2>Combustible</h2>
                  <h2>{e.combustible}</h2>
                </div>
            </div>
          </div>
          {/* <div  className="butonDeleteCars">
            <button value={e.id} onClick={handleRemoveBox} >X</button>
          </div> */}
        </div>)
        })

      }
      </div>
      <div className="btnPublicarCars">
        <Link to="/publicar-auto">
          <button>Publicar</button>
        </Link>
      </div>
    </div>
  )
}

export default CarsPublished;