import './App.css';
import { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Pronostico from './components/Pronostico';

function App() {

  // State para mostrar el clima o no
  const [consulta, setConsulta] = useState(false);

  // State para guardar los objetos resultantes de la consulta
  const [clima, setClima] = useState({});

  // Funcion para consultar a la API
  const consultarApi = async () => {
    try {
      const respuesta = await fetch('http://api.openweathermap.org/data/2.5/weather?q=hurlingham&appid=2463ce6ff06814eefef00152d963284a&mode=json&lang=es');
      const datos = await respuesta.json();
      setClima(datos);
    } catch (error) {
      console.log(error);
    }
    setConsulta(true);
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
              {consulta
                ? <Pronostico 
                    clima = {clima} 
                  />
                : <h3>Ingrese una ciudad para consultar</h3>
              }
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
