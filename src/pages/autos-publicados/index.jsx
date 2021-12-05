import { useSelector } from 'react-redux';
import CardCarPublish from './card-car-publicado';
import imgprueba1from from '../../img/auto.png';

const CarsPublished = () => {

  const dataCarsPublished = useSelector((state) => {
    return state.publsh.cars_published;
  });

  console.log("dataCarsPublished",dataCarsPublished);

  return(
    <div className="main_buscar_auto">
      {/* <CardCarPublish/> */}
      <div className="publishCar__wrapper">
        {dataCarsPublished.map((e)=>{
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
        </div>)
        })

        }
      </div>
    </div>
  )
}

export default CarsPublished;