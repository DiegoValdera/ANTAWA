import { ButtonLogReg } from "./buttonLogReg"
import { NavLink as Link } from 'react-router-dom';

function FormRegister(){
  return(
    <form className="FormRegister">
      <div className="FormRegister__2row inputHigh">
        <input type="text" placeholder="Nombre"/>
        <input placeholder="Apellido"/>
      </div>
      <div className="FormRegister__1row inputHigh">
        <input type="text" placeholder="Correo Electrónico"/>
      </div>
      <div className="FormRegister__1row inputHigh">
        <input type="password" placeholder="Contraseña"/>
      </div>
      <div className="FormRegister__2row inputHigh">
        <input type="number" placeholder="DNI"/>
        <input type="number" placeholder="Celular"/>
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

export { FormRegister }