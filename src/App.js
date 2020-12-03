import { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Formulario from './components/Formulario';
import Pronostico from './components/Pronostico';
import Error from './components/Error';

function App() {

  // State para mostrar el clima o no

  const [consulta, setConsulta] = useState(false);

  // State para controlar el error

  const [error, setError] = useState(false);

  // State para el mensaje de error

  const [mensajeError, setMensajeError] = useState('');

  // State para guardar los objetos resultantes de la consulta

  const [clima, setClima] = useState({});

  // Funcion para validar la respuesta de la API

  const validarRes = (cod) => {
    let codInt = parseInt(cod)
    
    if (codInt === 200) {
      setError(false);
      setConsulta(true);
    }
    if (codInt === 404) {
      setConsulta(false);
      setError(true);
      setMensajeError("La ciudad ingresada es invalida!");
    }
  }

  // Funcion para consultar a la API

  const consultarApi = async (ciudad) => {
    setConsulta(false);
    try {
      const respuesta = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid=2463ce6ff06814eefef00152d963284a&mode=json&lang=es');
      const datos = await respuesta.json();
      await setClima(datos);
      validarRes(datos.cod);
    } catch (error) {
      console.log(error);
    }
  }

  // Creo un useEffec para que busque algun dato cuando carga la 
  // Pagina por primera vez

  useEffect(() => {
    consultarApi("buenos aires");
  }, []);
  

  return (
    <Fragment>
      <div className="App">
        <h1 className="Tittle">Pronóstico del Tiempo en tu Ciudad</h1>
        <br/>

        <Container>
          <Row>
            <Col >
              <Formulario 
                consultarApi = {consultarApi}
                setError = {setError}
                setMensajeError = {setMensajeError}
              />
            </Col>
          </Row>

          <br/>

          <Row>
            <Col >
              {error
                ? <Error
                    error = {mensajeError}
                  />
                :null
              }
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
