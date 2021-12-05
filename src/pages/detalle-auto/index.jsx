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
                  <div className="div1_slider_imagen">
                    <div className="div1_sliderimagen_lista">
                      <Slider {...settings}>
                        <div className="div1_sliderimagen_elemento">
                          <img src={ofer.photos[0]} alt="1" />
                        </div>
                        <div className="div1_sliderimagen_elemento">
                          <img src={ofer.photos[1]} alt="2" />
                        </div>
                        <div className="div1_sliderimagen_elemento">
                          <img src={ofer.photos[0]} alt="3" />
                        </div>
                        <div className="div1_sliderimagen_elemento">
                          <img src={ofer.photos[1]} alt="4" />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>

                <div className="div1__frm">
                  <div className="div1_frm_filtro">
                    <div className="btn1">Mensaje</div>
                    <div className="btn2">Telefono</div>
                  </div>
                  <div className="div1_frm_card">
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
                  <div className="descripcion_vehiculo_inputs">
                    <textarea name="" id="" cols="30" rows="10">
                    {ofer.descripcion}
                    </textarea>
                  </div>
                </div>

                <div className="descripcion__carac">
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">{ofer.marca}</div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="Volkswagen" readOnly />
                    </div>
                  </div>
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">{ofer.modelo}</div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="PASSAT CC" readOnly />
                    </div>
                  </div>
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">
                    {ofer.categoria}
                    </div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="Sedan" readOnly />
                    </div>
                  </div>
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">
                    {ofer.modelo}
                    </div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="2012" readOnly />
                    </div>
                  </div>
                </div>

                <div className="descripccion__carac">
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">
                    {ofer.kilometraje}
                    </div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="80000" readOnly />
                    </div>
                  </div>
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">
                    {ofer.transmision}
                    </div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="Automatica" readOnly />
                    </div>
                  </div>
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">
                    {ofer.combustible}
                    </div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="Gasolina" readOnly />
                    </div>
                  </div>
                  <div className="descripcion_carac_division">
                    <div className="descripcion_caracdivision_titulo">{ofer.color}</div>
                    <div className="descripcion_caracdivision_inputs">
                      <input type="text" value="Negro" readOnly />
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



