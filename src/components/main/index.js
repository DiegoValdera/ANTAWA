import React , {Fragment} from 'react';
import { NavLink as Link } from 'react-router-dom';
import auto from '../../img/auto.png';
import Marc from '../../api/marca';
import Modelo from '../../api/modelo';


const Banner = () => {
    return (  
            <div class="banner">
                <img src={auto} alt=""/>
                <h1 class="banner__slogan">Encuentra el auto de tus sueños</h1>
            </div>
    );
}
 
const Formulario = () => {
    return (
        <Fragment>
        <div className="form1">
            <div className="form1__option">
                <button>Todos</button>
                <button>Nuevos</button>
                <button>Usados</button>
            </div>
            
            <form action="#" className="form1__filtro">
                <div className="form1__buscar">
                    <input type="text" placeholder="Buscar auto" className="form1__buscar__frm-buscar"/>
                    <select name="marca" id="marca">
                        <option value="0">Escoge tu marca</option>
                        <Marc />
                    </select>
                    <select name="modelo" id="modelo">
                        <option value="0">Escoge tu modelo</option>
                        <Modelo />
                    </select>
                </div>

                <div className="form1__periodo">
                    <label for="anio">Año</label>
                    <input className="form1__periodo__num" type="number" placeholder="Desde"/>
                    <input className="form1__periodo__num" type="number" placeholder="Hasta"/>
                        
                    <label for="rango" className="form1__periodo__espacio">Rango de precio S/.</label>
                    <input type="range" name="rango" id="rango" min="10000" max="500000" step="5000" />
                    <Link exact to="/buscar-auto">
                        <button>BUSCAR</button>
                    </Link>

                </div>
                
            </form>
            
        </div>
        </Fragment>
      );
}

 

const Home = () => {
    return ( 
            <main>
                <Banner />
                <Formulario />
            </main>
     );
}
 
export default Home;