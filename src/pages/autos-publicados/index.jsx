import { useSelector } from 'react-redux';
import CardCarPublish from './card-car-publicado';

const CarsPublished = () => {

  const dataCarsPublished = useSelector((state) => {
    return state.publsh.cars_published;
  });

  console.log("dataCarsPublished",dataCarsPublished);

  return(
    <main>
      <CardCarPublish/>
      <div>

      </div>
    </main>
  )
}

export default CarsPublished;