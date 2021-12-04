import { useEffect, useState } from "react";
import axios from 'axios';

const CarRegister = () =>{

  const url = 'http://localhost:5000/marcas/';
  const [newDataCar, setNewDataCar] = useState([]);

  const getDataCar = async () => {
      const dataCar = await axios.get(url)
      return dataCar.data;
  }

  useEffect(() => {
    const getAllDataCar = async () => {
      const allDataCar = await getDataCar();
      if(allDataCar) setNewDataCar(allDataCar);
    }
    getAllDataCar();
  }, []);

  const handleChange = (e) =>{
    console.log(e.target.value);
  }

  return(
    <div className="carRegister__Publish">
      <h2>Datos del Vehículo</h2>
      <form>
        <div>
          <select onChange={handleChange} name="marcas" id="marcas">
            <option>Mostrar Marcas</option>
              {newDataCar.map((marcaCarros) => {
                return(
                <option value={marcaCarros.id} key={marcaCarros.id}>{marcaCarros.marca}</option>
                )
              })}
          </select>


        </div>
        <div>

        </div>
      </form>
    </div>
  )
}

export default CarRegister;