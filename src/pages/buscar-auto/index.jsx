import React from 'react'
import Marcas from './apimarca';
import Cards from './apicard';
import card from '../../img/card.png';
import 'boxicons';


/*Mostrar las modelo en un select
function Modelos() {
    const [Modelo, setModelo] = useState([])
    const urlM = 'http://localhost:5000/marcas'

    const fetchApiModelo = () =>{
        fetch(urlM)
        .then(response => response.json())
        .then(data => (console.log(data)))
        .catch(error =>console.log(error))      
    };
    useEffect(()=>{fetchApiModelo(urlM)},[])

return ( 
    <select className="filtro__titulo__selects">
            <option value="">--Seleccione--</option>
        {Modelo.filtrer((itemM, index) =>(
            <option key={index} value={itemM.id=2}>{itemM.modelos}</option>
        ))}
        
    </select> 
    );
}
*/


const BcrAuto = () => {
 
    return ( 
            <div className="main_buscar_auto">                
                <div className="filtro">
                    <div className="filtro__titulo">
                        <div>Ubicación</div>
                        <div>
                            <select className="filtro__titulo__selects">
                                <option value="0">--Seleccione--</option>
                                <option value="1">Lima</option>
                            </select>
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Marca</div>
                        <div>
                            <Marcas />
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Modelo</div>
                        <div>
                            <select id="modelo" className="filtro__titulo__selects">
                                <option value="0">Todos</option>
                            </select>
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Año</div>
                        <div>
                            <select className="filtro__titulo__selects">
                                <option value="0">Desde</option>
                            </select>
                        </div>
                        <div>
                            <select className="filtro__titulo__selects">
                                <option value="0">Hasta</option>
                            </select>
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Categoria</div>
                        <div>
                            <select className="filtro__titulo__selects">
                                <option value="0">Todos</option>
                            </select>
                        </div>
                    </div>

                    <hr />

                    <div className="filtro__titulo">
                        <div>Precio</div>
                        <div>
                            <input type="text" className="filtro__titulo__inputs" placeholder="S/. 10000" />
                        </div>
                        <div>A</div>
                        <div>
                            <input type="text" className="filtro__titulo__inputs" placeholder="S/. 500000" />
                        </div>
                    </div>

                     <hr />
                     <div className="filtro__titulo">
                        <div>Kilometraje</div>
                        <div>
                            <input type="text" className="filtro__titulo__inputs" placeholder="0" />
                        </div>
                        <div>A</div>
                        <div>
                            <input type="text" className="filtro__titulo__inputs" placeholder="200.000" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Cards />
                </div>
                
            </div> );
}
 
export default BcrAuto;