//importar el index
import Slider from 'react-slick';
import React , {Component} from 'react'
import axios from 'axios';
import "boxicons" ;
import "glider-js";
import { useEffect } from "react";
import Glider, { GliderMethods } from 'react-glider';


 

class DetAuto extends Component{

  

  state = {
    oferta:[],
    status :false
  }

 cargarOfertas = () =>{
        
        const  {match}= this.props;

        axios.get('http://localhost:5000/ofertas?id='+match.params.idcard)
        .then(result=>{this.setState({
          oferta: result.data,
          status: true
        })})
        .catch(err => console.log(err))
 }

 componentDidMount = () =>{
   this.cargarOfertas();
 }

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    const  {match}= this.props;
    return(
          <>
          {this.state.status === true && (
            this.state.oferta.map((ofer, i)=>(
            <>

            <div className="det-main">
              <div className="div1">

                <div className="div1__slider">
                  <div className="div1__slider__imagen">
                    <div className="div1_sliderimagen_lista">
                      <Slider {...settings}>
                        <div className="div1_slider__imagen">
                          <img src={ofer.photos[0]} alt="1" />
                        </div>
                        <div className="div1_slider__imagen">
                          <img src={ofer.photos[1]} alt="2" />
                        </div>
                        <div className="div1_slider__imagen">
                          <img src={ofer.photos[0]} alt="3" />
                        </div>
                        <div className="div1_slider__imagen">
                          <img src={ofer.photos[1]} alt="4" />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>

                <div className="div1__frm">
                  <div className="div1__frm__filtro">
                    <div className="btn1">Mensaje</div>
                    <div className="btn2">Telefono</div>
                  </div>
                  <div className="div1__frm__card">
                    <h2>Contacta al Vendedor</h2>
                    <form action="">
                      <div className="inputs">
                        <input type="text" placeholder="Nombre" />
                      </div>
                      <div className="inputs">
                        <input type="text" placeholder="Correo" />
                      </div>
                      <div className="inputs">
                        <input type="text" placeholder="Celular" />
                      </div>
                      <div className="inputs">
                        <textarea placeholder="Descripcion"> </textarea>
                      </div>
                      <div className="inputs">
                        <button className="btn">CONTACTAR</button>
                      </div>
                    </form>
                  </div>
                </div>
                
              </div>

              <div className="descripcion">
                <div className="descripcion__vehiculo">
                  <h2>Descripcion del Vehiculo</h2>
                  <div className="descripcion__vehiculo__inputs">
                    <textarea name="" id="" cols="30" rows="10" readOnly>
                    {ofer.descripcion}
                    </textarea>
                  </div>
                </div>

                <div className="descripcion__carac">
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">Marca</div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.marca} readOnly />
                    </div>
                  </div>
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">Modelo</div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.modelo} readOnly />
                    </div>
                  </div>
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">
                    Categoria
                    </div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.categoria} readOnly />
                    </div>
                  </div>
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">
                    Año-Modelo
                    </div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.añomodelo} readOnly />
                    </div>
                  </div>
                </div>

                <div className="descripccion__carac">
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">
                    Kilomentraje
                    </div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.kilometraje} readOnly />
                    </div>
                  </div>
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">
                     Transmision
                    </div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.transmision} readOnly />
                    </div>
                  </div>
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">
                    Combustible
                    </div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.combustible} readOnly />
                    </div>
                  </div>
                  <div className="descripcion__carac__division">
                    <div className="descripcion__carac__division__titulo">Color</div>
                    <div className="descripcion__carac__division__inputs">
                      <input type="text" value={ofer.color} readOnly />
                    </div>
                  </div>
                </div>
              </div>
          </div>

            
            </>
            ))
            

          )}
         
          </>
    );
  }
}

export default DetAuto;



