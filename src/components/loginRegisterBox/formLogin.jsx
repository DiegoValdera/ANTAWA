import { ButtonLogReg } from "./buttonLogReg";
import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';


function FormLogin(){

  const url = 'http://localhost:5000/vendedores/';
  const initialFormValues = {email:"", password:""};
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();
  const dispatch = useDispatch();

  const checkEmail = (serverUsers, formData) => {
    console.log(serverUsers);
    console.log(formData.email.value);
    console.log(formData.password.value);

    const user = serverUsers
      .find(user => user.email == formData.email.value && user.contraseña == formData.password.value)
    // console.log(user);
    if (user){
      alert("Ingeso correcto!");
      dispatch({
        type: 'SET_LOGIN',
        payload: true,
      });
      dispatch({
        type: 'SET_USER',
        payload: user,
      });
      // setTimeout(()=>{
        history.push('/');
      // }, 1000);
    } else{
      alert("Cuenta no existe");
    }
  }

  let handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value});
    // console.log(formValues);
  }

  let handleSubmit = (e) =>{
    e.preventDefault();
    const checkUser =
      axios
        .get(url)
        .then(
          (respuesta) => checkEmail(respuesta.data, e.target));
  }

  return(
    <div className="LoginBox__form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" type="text" className="inputEmail" placeholder="Correo electrónico" required value={formValues.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Contraseña</label>
          <input name="password" type="password" className="inputPassword" placeholder="Contraseña" required value={formValues.password} onChange={handleChange}/>
        </div>
        <div>
        <ButtonLogReg TextoBtn="Ingresar"/>
        </div>
        <div className="LoginBox__text">
          <h5>¿Olvidaste tu contraseña?</h5>
          <h5>Si no rese parte de Antawa, <Link to="/register">registrate</Link></h5>
        </div>
      </form>
    </div>

  )
}

export { FormLogin }