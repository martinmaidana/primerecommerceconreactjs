/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
//Estilos
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';

import wine1 from './assets/img/wine1.jpg'
import wine2 from './assets/img/wine2.jpg'
import wine3 from './assets/img/wine3.jpg'
//componentes
//Core

/*############################################
|||||||||||||||Logica
############################################*/
const Home = () => {
  //funcion constructora
  return(
<div>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={wine1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={wine2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src={wine3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


</div>

  )

 
};
export default Home;
