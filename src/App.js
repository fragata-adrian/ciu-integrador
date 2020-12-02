import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Pronostico from './components/Pronostico';

function App() {

  // State para mostrar el clima o no

  const [consulta, setConsulta] = useState(false);


  // State para guardar los objetos resultantes de la consulta

  const [clima, setClima] = useState({});


  // Funcion para consultar a la API
  
  const consultarApi = async (ciudad) => {
    try {
      const respuesta = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid=2463ce6ff06814eefef00152d963284a&mode=json&lang=es');
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
          < Row>
            <Col>
              {consulta
                ? null
                : <p>Ingrese una ciudad para realizar la consulta</p>
              }
            </Col>
          </Row>

          <Row>
            <Col >
              <Formulario 
                consultarApi = {consultarApi}
              />
            </Col>
          </Row>
          
          <br/>

          <Row>
            <Col>
              {consulta
                ? <Pronostico 
                    clima = {clima} 
                  />
                : null
              }
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
