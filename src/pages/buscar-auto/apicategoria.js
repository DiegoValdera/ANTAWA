import React, {useEffect, useState} from 'react';

const Categoria = () => {

    const urlc = 'http://localhost:5000/categorias'
    const [cat, setcat] = useState([])

    const fetchAppCategoria = () =>{
        fetch(urlc)
        .then(responde => responde.json())
        .then(data => setcat(data))
        .catch(error=> console.log(error))
    }
    useEffect(() => {fetchAppCategoria(urlc)}, [])

    return ( 
        <select className="filtro__titulo__selects">
            <option value="0">Todos</option>
            {cat.map((itemC,index)=>(
                <option key={index} value={itemC.id}>{itemC.categoria}</option>
            ))}
        </select>
     );
}
 
export default Categoria;