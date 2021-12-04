import { Fragment } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import logo from '../../img/logo.svg';
import 'boxicons';

const Logo = () => {
    return (
        <Link exact to="/"><img src={logo} alt=""/></Link>
        );
}

const Nav = () => {

  const userData = useSelector((state) => {
    return state.auth.userData;
  });

  const isLogin = useSelector((state) => {
    return state.auth.isLogin;
  });

  const dispatch = useDispatch();

  const handleButtonOnClick = () =>{
    dispatch({
      type: 'SET_LOGIN',
      payload: false,
    });
    dispatch({
      type: 'SET_USER',
      payload: {},
    });
  }

    return (
    <ul className="header__ul">
        <li className="header__li"><Link exact to="/buscar-auto?search=0&brand=0&model=0&year_from=0&year_to=0&price=0" activeClassName="a_active">Catalogo</Link></li>
        {!isLogin ? '' :
        <li className="header__li"><Link exact to="/publicar-auto" activeClassName="a_active">Vende tu auto</Link></li>
        }
        {!isLogin ? (<>
          <li className="header__li"><Link exact to="/register" activeClassName="a_active">Registrate</Link></li>
          <li className="i">
              <Link exact to="/login" activeClassName="a_active" className="user">
                  <box-icon name='user'></box-icon>
              </Link>
          </li></>) :
          (<><li className="isLoginName"> Bienvenido: <br/> {userData.nombre} {userData.Apellido}</li>
           <li onClick={handleButtonOnClick}><Link to="/">Cerrar Sesión</Link></li></>)}
    </ul>
    );
}



const Header = () => {

    return (
        <Fragment>
            <header className="header">
                <Logo />
                <Nav />
            </header>
        </Fragment>
     );
}

export default Header;