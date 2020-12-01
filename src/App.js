import './App.css';
import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Pronostico from './components/Pronostico';

function App() {

  // State para guardar los objetos resultantes de la consulta

  const [clima, setClima] = useState({});

  // Extraigo los valores que voy a utilizar

  // Funcion para consultar a la API sp, es

  const consultarApi = async () => {
    try {
      const respuesta = await fetch('api.openweathermap.org/data/2.5/weather?id=3433955&appid=2463ce6ff06814eefef00152d963284a&units=metric&lang=es');
      const datos = await respuesta.json();
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <div className="App">
        <h1 className="Tittle">Pronóstico del Tiempo en tu Ciudad</h1>
        <br/>
        <Container>  
          <Row>
            <Col >
              <Button
                variant="primary"
                onClick = {() => consultarApi()} 
              >Consultar
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <Pronostico 
                /*icon = {clima['weather'][0].icon}
                description = {description}
                temp = {temp}
                temp_min = {temp_min}
                temp_max = {temp_max}
                humidity = {humidity}
                name = {name}*/
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
