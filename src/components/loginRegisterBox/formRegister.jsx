import { ButtonLogReg } from "./buttonLogReg";
import { NavLink as Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function FormRegister(){

  const url = 'http://localhost:5000/vendedores';
  // const pageHome = '/';
  const initialValues = { nombre:"", Apellido:"", email:"", contraseña:"", dni:"", celular:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios
      .post(url,formValues)
      .then(() => {
        console.log("Enviado a la base de datos")
      })
      alert("Registro exitoso");
      setTimeout(() => {
        history.push('/login');
      }, 1000);
    }

  },[formErrors])

  const validate = (values) =>{
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if(!values.nombre){
      errors.nombre = "Es obligatorio ingresar su nombre";
    }
    if(!values.Apellido){
      errors.Apellido = "Es obligatorio ingresar su apellido";
    }
    if(!values.email){
      errors.email = "Es obligatorio ingresar su correo";
    } else if(!regex.test(values.email)){
      errors.email = "No es un correo válido";
    }
    if(!values.contraseña){
      errors.contraseña = "Es obligatorio ingresar su contraseña";
    } else if(values.contraseña.length < 4 ){
      errors.contraseña = "La contraseña no puede tener menor de 4 caractéres";
    } else if (values.contraseña.length > 10){
      errors.contraseña = "La contraseña no puede tener mayor de 10  caractéres";
    }
    if(!values.dni){
      errors.dni = "Es obligatorio ingresar su dni";
    } else if(values.dni.length < 8 || values.dni.length > 8){
      errors.dni = "DNI inválido";
    }
    if(!values.celular){
      errors.celular = "Es obligatorio ingresar su celular";
    } else if (values.celular.length < 9 || values.celular.length > 9){
      errors.celular = "Número de celular inválido";
    }
    return errors;
  }

  return(
    <form className="FormRegister" onSubmit={handleSubmit}>
      <div className="FormRegister__2row inputHigh">
        <div className="FormRegister__divHigh">
          <input type="text" name="nombre" placeholder="Nombre" value={formValues.nombre} onChange={handleChange}/>
          <p>{formErrors.nombre}</p>
        </div>
        <div className="FormRegister__divHigh">
          <input type="text" name="Apellido" placeholder="Apellido" value={formValues.Apellido} onChange={handleChange}/>
          <p>{formErrors.Apellido}</p>
        </div>
      </div>
      <div className="FormRegister__1row inputHigh FormRegister__divHigh" >
        <input type="text" name="email" placeholder="Correo Electrónico" value={formValues.email} onChange={handleChange}/>
        <p>{formErrors.email}</p>
      </div>
      <div className="FormRegister__1row inputHigh FormRegister__divHigh">
        <input type="password" name="contraseña" placeholder="Contraseña" value={formValues.contraseña} onChange={handleChange}/>
        <p>{formErrors.contraseña}</p>
      </div>
      <div className="FormRegister__2row inputHigh">
        <div className="FormRegister__divHigh">
          <input type="number" name="dni" placeholder="DNI" value={formValues.dni} onChange={handleChange}/>
          <p>{formErrors.dni}</p>
        </div>
        <div className="FormRegister__divHigh">
          <input type="number" name="celular" placeholder="Celular" value={formValues.celular} onChange={handleChange}/>
          <p>{formErrors.celular}</p>
        </div>
      </div>
      <div className="FormRegister__check">
        <label><input type="checkbox"/> Acepto las Políticas de privacidad de Antawa</label>
        <label><input type="checkbox"/> Acepto los Términos y condiciones de Antawa</label>
        <label><input type="checkbox"/> Autorizo el uso de mis datos para Fines adicionales.</label>
      </div>
      <div>
      <ButtonLogReg TextoBtn="Registrar"/>
      </div>
      <div className="LoginBox__text">
        <h5>¿Ya tienes una cuenta? <span><Link to="/login">Ingresa</Link></span> </h5>
      </div>
    </form>
  )
}

export { FormRegister };