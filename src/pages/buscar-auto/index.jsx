import React from 'react'
import Marcas from './apimarca';
import Cards from './apicard';
import Modelo from './apimodelo';
import Categoria from './apicategoria';

import 'boxicons';


const BcrAuto = () => {
 
    return ( 
            <div className="main_buscar_auto">                
                <div className="filtro">
                <form>
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
                            <Modelo />
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Año</div>
                        <div>
                            <select className="filtro__titulo__selects">
                                <option value="0">Desde</option>
                                <option value="2010">2010</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        <div>
                            <select className="filtro__titulo__selects">
                                <option value="0">Hasta</option>
                                <option value="2010">2010</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Categoria</div>
                        <div>
                            <Categoria />
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
                    <div className="filtro__filtrar">
                        <button>BUSCAR</button>
                    </div>
                </form>
                </div>

                <div className="container">
                    <Cards />
                </div>
                
            </div> );
}
 
export default BcrAuto;