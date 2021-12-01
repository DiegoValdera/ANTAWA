import card from '../../img/card.png';

const BcrAuto = () => {
    return ( 
            <main>                
                <div className="filtro">
                    <div className="filtro__lateral">
                        <div>Ubicación</div>
                        <div></div>
                        <div></div>
                        <div>Arequipa</div>

                        <div>Marca</div>
                        <div></div>
                        <div></div>
                        <div>Todos</div>

                        <div>Modelo</div>
                        <div></div>
                        <div></div>
                        <div>Todos</div>

                        <div>Año</div>
                        <div>Desde</div>
                        <div>A</div>
                        <div>Hasta</div>
                    </div>

                    <hr />

                    <div>
                        Precio
                    </div>

                     <hr />

                     <div>
                         Kilometraje
                     </div>
                </div>

                <div className="container">

                    <div className="container__card">
                        <div><img src={card} /></div>
                        <div className="container__body">
                            <div className="anio">2019</div> <h3>marca</h3>
                        </div>
                    </div>

                    <div className="container__card">
                        <div><img src={card} /></div>
                        <div className="container__body">
                            <div>2019</div> <h3>marca</h3>
                        </div>
                    </div>

                    <div className="container__card">
                        <div><img src={card} /></div>
                        <div className="container__body">
                            <div>2019</div> <h3>marca</h3>
                        </div>
                    </div>

                </div>
                
            </main> );
}
 
export default BcrAuto;