import React, {useEffect, useState} from 'react';

//Mostrar las marcas en un select
function Marcas() {
    const [Marca, setMarca] = useState([])
    const url = 'http://localhost:5000/marcas'

    const fetchApi = () =>{
        fetch(url)
        .then(response => response.json())
        .then(data => (setMarca(data)))
        .catch(error =>console.log(error))
    };
    useEffect(()=>{fetchApi(url)},[])

return (
    <select className="filtro__titulo__selects">
        <option value="">--Seleccione--</option>
        {Marca.map((item, index) =>(
            <option key={index} value={item.id}>{item.marca}</option>
        ))}

    </select>
    );
}

export default Marcas;

