import { useEffect, useState } from "react";
import axios from 'axios';
import { api } from "../../api/api";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const CarRegister = () =>{

  const userDataId = useSelector((state) => {
    return state.auth.userData.id;
  });

  const carrosData = useSelector((state) => {
    return state.publsh.cars_published;
  });

  const initialStateValues = {
    marca: "",
    modelo: "",
    categoria: "",
    añomfabricacion: "",
    añomodelo: "",
    kilometraje: "",
    transmision: "",
    combustible: "",
    cilindrada: "",
    numeropuertas: "",
    color: "",
    preciodolares: "",
    region: "",
    photos: [],
    descripcion: "",
    autonuevo: false,
    idVendedor: userDataId,
  }

  const [newDataCar, setNewDataCar] = useState([]);
  const [newDataModel, setNewDataModel] = useState([]);
  const [newDataOtherCar, setNewDataOtherCar] = useState([]);
  const [newDataForm, setNewDataForm] = useState(initialStateValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();

  const dispatch = useDispatch();

  const getDataCar = async () => {
      const dataCar = await api.get("/marcas");
      return dataCar.data;
  }

  useEffect(() => {
    const getAllDataCar = async () => {
      const allDataCar = await getDataCar();
      if(allDataCar) setNewDataCar(allDataCar);
    }
    getAllDataCar();
  }, []);


  const getOtherDataCar = async() => {
    const OtherDataCategoria = await api.get("/categorias");
    const OtherDataCombustibles = await api.get("/combustibles");
    const OtherDataTransmisiones = await api.get("/transmisiones");
    const OtherDataRegiones = await api.get("/regiones");

    return [
      OtherDataCategoria.data,
      OtherDataCombustibles.data,
      OtherDataTransmisiones.data,
      OtherDataRegiones.data,
    ]
  }

  useEffect(() => {
    const getAllOtherData = async () => {
      const allOtherDataCategoria = await getOtherDataCar();
      if(allOtherDataCategoria) setNewDataOtherCar(allOtherDataCategoria);
    };
    getAllOtherData();
  },[])

  const handleChange = (e) =>{
    let {name, value} = e.target;
    setNewDataForm({...newDataForm, [name]:value})
  }

  const handleChangeFoto = (e) =>{
    setNewDataForm({...newDataForm, photos:[...newDataForm.photos,e.target.value]});
  }

  useEffect(() =>{
    setNewDataModel(newDataCar.filter((marca) => marca.marca == newDataForm.marca))
  }, [newDataForm.marca])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(newDataForm));
    setIsSubmit(true);
    console.log(formErrors);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios
      .post("http://localhost:5000/ofertas",newDataForm)
      .then(() => {
        console.log("Enviado a base de datos")
      })
      console.log(newDataForm);
      console.log(formErrors);
      dispatch({
        type: "SET_PUBLISH_CARS",
        payload: newDataForm,
      });
      alert("Registro Exitoso");
      history.push('/autos-publicados');
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    if(!values.marca){
      errors.marca = "Es obligatorio ingresar marca"
    }
    if(!values.modelo){
      errors.modelo = "Es obligatorio ingresar modelo"
    }
    if(!values.categoria){
      errors.categoria = "Es obligatorio ingresar categoría"
    }
    if(!values.añomfabricacion){
      errors.añomfabricacion = "Es obligatorio ingresar año de fabricación"
    }
    if(!values.añomodelo){
      errors.añomodelo = "Es obligatorio ingresar año del modelo"
    }
    if(!values.kilometraje){
      errors.kilometraje = "Es obligatorio ingresar kilometraje"
    }
    if(!values.transmision){
      errors.transmision = "Es obligatorio ingresar transmisión"
    }
    if(!values.combustible){
      errors.combustible = "Es obligatorio ingresar tipo de combustible"
    }
    if(!values.cilindrada){
      errors.cilindrada = "Es obligatorio ingresar cilindrada"
    }
    if(!values.numeropuertas){
      errors.numeropuertas = "Es obligatorio ingresar dato"
    }
    if(!values.color){
      errors.color = "Es obligatorio ingresar color"
    }
    if(!values.preciodolares){
      errors.preciodolares = "Es obligatorio ingresar precio"
    }
    if(!values.region){
      errors.region = "Es obligatorio ingresar región"
    }
    if(!values.photos){
      errors.photos = "Es obligatorio ingresar link de photo"
    }
    if(!values.descripcion){
      errors.descripcion = "Es obligatorio ingresar descripción"
    } else if (values.descripcion.length < 10){
      errors.descripcion = "Ingresar mínimo 10 caracteres"
    }

    return errors;
  }

  return(
    <div className="carRegister_wrapper">
      <div className="carRegister__Publish">
        <h2>Datos del Vehículo</h2>
        <div className="UserContact__line"></div>
        <form onSubmit={handleSubmit}>
          <div className="carRegister__Inputs">
            <div className="FormRegister__divHigh">
              <select value={newDataForm.marca} onChange={handleChange} name="marca" id="marca" >
                <option>Marcas</option>
                  {newDataCar.map((marcaCarros) => {
                    return(
                    <option value={marcaCarros.marca} key={marcaCarros.id}>{marcaCarros.marca}</option>
                    )
                  })}
              </select>
              <p>{formErrors.marca}</p>
            </div>
            <div className="FormRegister__divHigh">
              <select value={newDataForm.modelo} onChange={handleChange} name="modelo" id="modelo" >
                <option>Modelos</option>
                {!!newDataModel.length &&
                  newDataModel[0].modelos.map((modelo, id) => {
                    return(
                      <option key={id} value={modelo}>{modelo}</option>
                    )
                  })
                }
              </select>
              <p>{formErrors.modelo}</p>
            </div>
            <div className="FormRegister__divHigh">
              <select value={newDataForm.categoria} onChange={handleChange} name="categoria" id="categoria" >
                <option>Categorías</option>
                {!!newDataOtherCar[0] &&
                newDataOtherCar[0].map((categorias) =>{
                  return(
                  <option value={categorias.categoria} key={categorias.id}>{categorias.categoria}</option>
                  )
                })
                }
              </select>
              <p>{formErrors.categoria}</p>
            </div>
            <div className="FormRegister__divHigh">
              <input value={newDataForm.añomfabricacion} onChange={handleChange} name="añomfabricacion" id="añomfabricacion" type="number" placeholder="Año de fabricación" />
              <p>{formErrors.añomfabricacion}</p>
            </div>
            <div className="FormRegister__divHigh">
              <input value={newDataForm.añomodelo} onChange={handleChange} name="añomodelo" id="añomodelo" type="number" placeholder="Año de modelo" />
              <p>{formErrors.añomodelo}</p>
            </div>
            <div className="FormRegister__divHigh">
              <input value={newDataForm.kilometraje} onChange={handleChange} name="kilometraje" id="kilometraje" type="number" placeholder="kilometraje" />
              <p>{formErrors.kilometraje}</p>
            </div>
            <div className="FormRegister__divHigh">
              <select value={newDataForm.transmision} onChange={handleChange} name="transmision" id="transmision" >
                <option>Transmisiones</option>
                {!!newDataOtherCar[2] &&
                newDataOtherCar[2].map((transmisiones) =>{
                  return(
                  <option value={transmisiones.transmision} key={transmisiones.id}>{transmisiones.transmision}</option>
                  )
                })
                }
              </select>
              <p>{formErrors.transmision}</p>
            </div>
            <div className="FormRegister__divHigh">
              <select value={newDataForm.combustible} onChange={handleChange} name="combustible" id="combustible" >
                <option>Combustibles</option>
                {!!newDataOtherCar[1] &&
                newDataOtherCar[1].map((combustibles) =>{
                  return(
                  <option value={combustibles.combustible} key={combustibles.id}>{combustibles.combustible}</option>
                  )
                })
                }
              </select>
              <p>{formErrors.combustible}</p>
            </div>
            <div className="FormRegister__divHigh">
              <input value={newDataForm.cilindrada} onChange={handleChange} name="cilindrada" id="cilindrada" type="number" placeholder="Cilindrada" />
              <p>{formErrors.cilindrada}</p>
            </div>
            <div className="FormRegister__divHigh">
              <select value={newDataForm.numeropuertas} onChange={handleChange} name="numeropuertas" id="numeropuertas" >
                <option>Número de puertas</option>
                <option>3</option>
                <option>4</option>
              </select>
              <p>{formErrors.numeropuertas}</p>
            </div>
            <div className="FormRegister__divHigh">
              <input value={newDataForm.color} onChange={handleChange} name="color" id="color" type="text" placeholder="Color" />
              <p>{formErrors.color}</p>
            </div>
            <div className="FormRegister__divHigh">
              <input value={newDataForm.preciodolares} onChange={handleChange} name="preciodolares" id="preciodolares" type="number" placeholder="Precio en Dólares" />
              <p>{formErrors.preciodolares}</p>
            </div>
            <div className="FormRegister__divHigh">
              <select value={newDataForm.region} onChange={handleChange} name="region" id="region" >
                <option>Regiones</option>
                {!!newDataOtherCar[3] &&
                newDataOtherCar[3].map((regiones) =>{
                  return(
                  <option value={regiones.region} key={regiones.id}>{regiones.region}</option>
                  )
                })
                }
              </select>
              <p>{formErrors.region}</p>
            </div>
            <div className="FormRegister__divHigh">
              <input value={newDataForm.photos} onChange={handleChangeFoto} name="photos" id="photos" type="text" placeholder="Link de photo" />
              <p>{formErrors.photos}</p>
            </div>
            <div className="gridInputPublishCar FormRegister__divHigh">
              <textarea value={newDataForm.descripcion} onChange={handleChange} name="descripcion" id="descripcion" type="text" placeholder="Ingresa descripción" className="inputDatoDescription">Ingrese descripción</textarea>
              <p>{formErrors.descripcion}</p>
            </div>
          </div>
          <div>
            <button>PUBLICAR</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CarRegister;