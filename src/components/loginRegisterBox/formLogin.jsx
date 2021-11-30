import { ButtonLogReg } from "./buttonLogReg";
import { NavLink as Link } from 'react-router-dom';


function FormLogin(){
  return(
    <div className="LoginBox__form">
      <form>
        <div>
          <label>Email</label>
          <input placeholder="Correo electrónico"/>
        </div>
        <div>
          <label>Contraseña</label>
          <input placeholder="Contraseña"/>
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