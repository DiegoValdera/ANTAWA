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
<<<<<<< HEAD
        {/* <li className="header__li"><Link exact to="/usados" activeClassName="a_active">Usados</Link></li>
        <li className="header__li"><Link exact to="2" activeClassName="a_active">Financiación</Link></li> */}
        <li className="header__li"><Link exact to="/buscar-auto" activeClassName="a_active">Catalogo</Link>
            <ul>
                <li><Link exact to="/buscar-autos" activeClassName="a_active">Autos</Link></li>
                <li><Link exact to="/buscar-autos" activeClassName="a_active">Motos</Link></li>
            </ul>
        </li>
        {!isLogin ? '' :
        <li className="header__li"><Link exact to="/publicar-auto" activeClassName="a_active">Vende tu auto</Link></li>
        }
=======
        <li className="header__li"><Link exact to="/buscar-auto?search=0&brand=0&model=0&year_from=0&year_to=0&price=0" activeClassName="a_active">Catalogo</Link></li>
        <li className="header__li"><Link exact to="/vende" activeClassName="a_active">Vende tu auto</Link></li>
>>>>>>> 878439855e2a39ac29b85b7a9e4bad5204c70b40
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