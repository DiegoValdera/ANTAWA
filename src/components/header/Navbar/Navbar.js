import React, { useState, useEffect } from "react";
import { NavLink as Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../../api/api';
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Narbar.elements";
import {
  FaCarAlt,
  FaDollarSign,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from '../../../img/logo.svg';
import 'boxicons';

//Importando logo
const Logo = () => {
  return (
      <Link exact to="/"><img src={logo} alt=""/></Link>
      );
}


const Navbar = () => {
// ------------------------------------------------
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
    dispatch({
      type: "SET_PUBLISH_CARS",
      payload: [],
    })
  }

  const [carsDataPublished, getCarsDataPublished] = useState([]);

  const getCarsPublished = async () => {
    const CarsPublished = await api.get("/ofertas");
    return CarsPublished.data;
  }

  useEffect(() => {
    const getAllCarsPublished = async () => {
      const allCarsPublished = await getCarsPublished();
      const ifPublish = allCarsPublished.filter(publicacion => userData.id == publicacion.idVendedor);
      getCarsDataPublished(ifPublish);
      dispatch({
        type: "SET_PUBLISH_CARS",
        payload: ifPublish,
      });
      console.log(allCarsPublished);
      console.log(userData);
    }
  getAllCarsPublished();
  },[userData])

// ------------------------------------------------
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
            <Link exact to="/" activeClassName="a_active">
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  Inicio
                </div>
              </MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link exact to="/buscar-auto?search=0&brand=0&model=0&year_from=0&year_to=0&price=0" activeClassName="a_active">
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div>
                    <FaCarAlt />
                    Catalogo
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem>
            {!isLogin ? '' :  <MenuItem>
              <Link exact to={Object.keys(carsDataPublished).length === 0 ? "/primera-publicacion": "/autos-publicados"} activeClassName="a_active">
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div>
                    <FaDollarSign />
                    Vende tu auto
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem>}
            {!isLogin ? (<>
            <MenuItem>
              <Link exact to="/register" activeClassName="a_active">
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div>
                    <FaGlasses />
                      Registrate
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link exact to="/login" activeClassName="a_active">
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div>
                    <FaUserAlt />
                    Login
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem>

              </>):(<>
                <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div>
                    <FaHome />
                    {userData.nombre} {userData.Apellido}
                  </div>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
              <Link exact to="/login" activeClassName="a_active">
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <div onClick={handleButtonOnClick}>
                    <FaGlasses />
                      Cerrar Sesión
                  </div>
                </MenuItemLink>
              </Link>
            </MenuItem></>
              )}

          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;