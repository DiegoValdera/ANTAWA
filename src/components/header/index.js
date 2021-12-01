import { Fragment } from 'react';
import { NavLink as Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import 'boxicons';

const Logo = () => {
    return (
        <Link exact to="/"><img src={logo} alt=""/></Link>
        );

}

const Nav = () => {
    return (
            <ul className="header__ul">
                <li className="header__li"><Link exact to="/usados" activeClassName="a_active">Usados</Link></li>
                <li className="header__li"><Link exact to="2" activeClassName="a_active">Financiación</Link></li>
                <li className="header__li"><Link exact to="/buscar-auto" activeClassName="a_active">Mas</Link>
                    <ul>
                        <li><Link exact to="/buscar-autos" activeClassName="a_active">Autos</Link></li>
                        <li><Link exact to="/buscar-autos" activeClassName="a_active">Motos</Link></li>
                    </ul>
                </li>
                <li className="header__li"><Link exact to="4" activeClassName="a_active">Vende tu auto</Link></li>
                <li className="header__li"><Link exact to="/register" activeClassName="a_active">Registrate</Link></li>
                <li className="i">
                    <Link exact to="/login" activeClassName="a_active" className="user">
                        <box-icon name='user'></box-icon>
                    </Link>
                </li>
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