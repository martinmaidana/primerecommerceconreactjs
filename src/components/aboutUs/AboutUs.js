/*############################################
|||||||||||||||Importaciones
############################################*/

//Modulos
//Estilos
import "./AboutUs.css";
import Card from 'react-bootstrap/Card';

//componentes

//Core

/*############################################
|||||||||||||||Logica
############################################*/
const AboutUs = () => {
  //funcion constructora

  return (
    <div >
      <Card bg="warning">
      <Card.Header>Lorem ipsum </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." {' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    
     
    </div>
  );
};
export default AboutUs;
