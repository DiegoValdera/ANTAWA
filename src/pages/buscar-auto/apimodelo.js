import React, {useEffect, useState} from 'react';

// Mostrar los modelos en un select
const Modelo = () => {
    const [Modelo, setModelo] = useState([])
    const url = 'http://localhost:5000/marcas'

    const fetchApiModelo = () =>{
        fetch(url)
        .then(response => response.json())
        .then(data => (setModelo(data)))
        .catch(error =>console.log(error))      
    };
    useEffect(()=>{fetchApiModelo(url)},[])

return ( 
    <select className="filtro__titulo__selects">
            <option value="">--Seleccione--</option>
            {Modelo.map((item, index) =>(
            <option key={index} value={item.id=5}>{item.modelos[10]}</option>
             ))}
        
    </select> 
    );
}


 
export default Modelo;