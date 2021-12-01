import card from '../../img/card.png';
import 'boxicons';

const BcrAuto = () => {
 
    return ( 
            <div className="main_buscar_auto">                
                <div className="filtro">
                    <div className="filtro__titulo">
                        <div>Ubicación</div>
                        <div>
                            <select className="filtro__titulo__selects">
                                <option value="0">Arequipa</option>
                            </select>
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Marca</div>
                        <div>
                            <select className="filtro__titulo__selects">
                            <option value="0">Toyota</option>
                            </select> 
                        </div>
                    </div>
                    <div className="filtro__titulo">
                        <div>Modelo</div>
                        <div>
                            <select className="filtro__titulo__selects">
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

                    <div>
                        <div className="container__img"><img src={card} /></div>

                        <div className="container__card" >
                            <div className="container__card__titulo">
                                <div className="container__card__titulo__anio">2019</div> 
                                <h3 className="container__card__titulo__marca">Toyota</h3>
                            </div>

                            <div className="container__card__tipo">Mecanico</div>

                            <div className="container__card__precio">
                                <div><box-icon type="solid" name='no-entry' color="white"></box-icon></div>
                                <div className="container__card__precio__precio1">$ 1,200</div> |
                                <h3 className="container__card__precio__precio2">$24,000</h3>
                            </div>
                            <hr />
                            <div className="container__card__kilometros">
                                <div><box-icon type="solid" name='ev-station' color="white"></box-icon></div>
                                <div>32,000 Kilometros</div>
                            </div>
                            <div className="container__card__color">
                                <div><box-icon name='color-fill' color="white"></box-icon></div>
                                <div>Exterior negro</div>
                            </div>
                            <div className="container__card__descripcion">
                                <div><box-icon name='taxi' color="white"></box-icon></div>
                                <div>Sin accidentes, uso personal.</div>
                            </div>

                        </div>
                        
                    </div>

                    <div>
                        <div className="container__img"><img src={card} /></div>

                        <div className="container__card" >
                            <div className="container__card__titulo">
                                <div className="container__card__titulo__anio">2019</div> 
                                <h3 className="container__card__titulo__marca">Toyota</h3>
                            </div>

                            <div className="container__card__tipo">Mecanico</div>

                            <div className="container__card__precio">
                                <div><box-icon type="solid" name='no-entry' color="white"></box-icon></div>
                                <div className="container__card__precio__precio1">$ 1,200</div> |
                                <h3 className="container__card__precio__precio2">$24,000</h3>
                            </div>
                            <hr />
                            <div className="container__card__kilometros">
                                <div><box-icon type="solid" name='ev-station' color="white"></box-icon></div>
                                <div>32,000 Kilometros</div>
                            </div>
                            <div className="container__card__color">
                                <div><box-icon name='color-fill' color="white"></box-icon></div>
                                <div>Exterior negro</div>
                            </div>
                            <div className="container__card__descripcion">
                                <div><box-icon name='taxi' color="white"></box-icon></div>
                                <div>Sin accidentes, uso personal.</div>
                            </div>

                        </div>
                        
                    </div>

                    <div>
                        <div className="container__img"><img src={card} /></div>

                        <div className="container__card" >
                            <div className="container__card__titulo">
                                <div className="container__card__titulo__anio">2019</div> 
                                <h3 className="container__card__titulo__marca">Toyota</h3>
                            </div>

                            <div className="container__card__tipo">Mecanico</div>

                            <div className="container__card__precio">
                                <div><box-icon type="solid" name='no-entry' color="white"></box-icon></div>
                                <div className="container__card__precio__precio1">$ 1,200</div> |
                                <h3 className="container__card__precio__precio2">$24,000</h3>
                            </div>
                            <hr />
                            <div className="container__card__kilometros">
                                <div><box-icon type="solid" name='ev-station' color="white"></box-icon></div>
                                <div>32,000 Kilometros</div>
                            </div>
                            <div className="container__card__color">
                                <div><box-icon name='color-fill' color="white"></box-icon></div>
                                <div>Exterior negro</div>
                            </div>
                            <div className="container__card__descripcion">
                                <div><box-icon name='taxi' color="white"></box-icon></div>
                                <div>Sin accidentes, uso personal.</div>
                            </div>

                        </div>
                        
                    </div>

                    <div>
                        <div className="container__img"><img src={card} /></div>

                        <div className="container__card" >
                            <div className="container__card__titulo">
                                <div className="container__card__titulo__anio">2019</div> 
                                <h3 className="container__card__titulo__marca">Toyota</h3>
                            </div>

                            <div className="container__card__tipo">Mecanico</div>

                            <div className="container__card__precio">
                                <div><box-icon type="solid" name='no-entry' color="white"></box-icon></div>
                                <div className="container__card__precio__precio1">$ 1,200</div> |
                                <h3 className="container__card__precio__precio2">$24,000</h3>
                            </div>
                            <hr />
                            <div className="container__card__kilometros">
                                <div><box-icon type="solid" name='ev-station' color="white"></box-icon></div>
                                <div>32,000 Kilometros</div>
                            </div>
                            <div className="container__card__color">
                                <div><box-icon name='color-fill' color="white"></box-icon></div>
                                <div>Exterior negro</div>
                            </div>
                            <div className="container__card__descripcion">
                                <div><box-icon name='taxi' color="white"></box-icon></div>
                                <div>Sin accidentes, uso personal.</div>
                            </div>

                        </div>
                        
                    </div>

                    <div>
                        <div className="container__img"><img src={card} /></div>

                        <div className="container__card" >
                            <div className="container__card__titulo">
                                <div className="container__card__titulo__anio">2019</div> 
                                <h3 className="container__card__titulo__marca">Toyota</h3>
                            </div>

                            <div className="container__card__tipo">Mecanico</div>

                            <div className="container__card__precio">
                                <div><box-icon type="solid" name='no-entry' color="white"></box-icon></div>
                                <div className="container__card__precio__precio1">$ 1,200</div> |
                                <h3 className="container__card__precio__precio2">$24,000</h3>
                            </div>
                            <hr />
                            <div className="container__card__kilometros">
                                <div><box-icon type="solid" name='ev-station' color="white"></box-icon></div>
                                <div>32,000 Kilometros</div>
                            </div>
                            <div className="container__card__color">
                                <div><box-icon name='color-fill' color="white"></box-icon></div>
                                <div>Exterior negro</div>
                            </div>
                            <div className="container__card__descripcion">
                                <div><box-icon name='taxi' color="white"></box-icon></div>
                                <div>Sin accidentes, uso personal.</div>
                            </div>

                        </div>
                        
                    </div>

                    <div>
                        <div className="container__img"><img src={card} /></div>

                        <div className="container__card" >
                            <div className="container__card__titulo">
                                <div className="container__card__titulo__anio">2019</div> 
                                <h3 className="container__card__titulo__marca">Toyota</h3>
                            </div>

                            <div className="container__card__tipo">Mecanico</div>

                            <div className="container__card__precio">
                                <div><box-icon type="solid" name='no-entry' color="white"></box-icon></div>
                                <div className="container__card__precio__precio1">$ 1,200</div> |
                                <h3 className="container__card__precio__precio2">$24,000</h3>
                            </div>
                            <hr />
                            <div className="container__card__kilometros">
                                <div><box-icon type="solid" name='ev-station' color="white"></box-icon></div>
                                <div>32,000 Kilometros</div>
                            </div>
                            <div className="container__card__color">
                                <div><box-icon name='color-fill' color="white"></box-icon></div>
                                <div>Exterior negro</div>
                            </div>
                            <div className="container__card__descripcion">
                                <div><box-icon name='taxi' color="white"></box-icon></div>
                                <div>Sin accidentes, uso personal.</div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                
            </div> );
}
 
export default BcrAuto;