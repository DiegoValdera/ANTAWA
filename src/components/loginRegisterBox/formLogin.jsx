import { ButtonLogReg } from "./buttonLogReg";
import { NavLink as Link } from 'react-router-dom';
import axios from 'axios';

function FormLogin(){

  let handleSubmit = (e) =>{
    let url = 'http://localhost:3000/vendedores/'
    let inputEmail = document.querySelector('.inputEmail').value;
    let inputPassword = document.querySelector('.inputPassword').value;

    e.preventDefault();
    console.log("Mensajeeeee")

    axios.get(url).then(respuesta =>{
      respuesta.data.map((vendedor)=>{
        console.log(vendedor.email)
      })
    })

  }


  return(
    <div className="LoginBox__form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" className="inputEmail" placeholder="Correo electrónico" required/>
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" className="inputPassword" placeholder="Contraseña" required/>
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