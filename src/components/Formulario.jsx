import React, { Fragment, useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ consultarApi, setError, setMensajeError }) => {

  // Creo el state para almacenar los datos de la consulta

  const [consulta, setConsulta] = useState({
    ciudad: '',
    pronostico: ''
  });

  // Extraigo los valores del state de la consulta

  const { ciudad, pronostico } = consulta;

  // HandleChange para ir leyendo lo que el usuario escribe

  const handleChange = e => {
    setConsulta({
      ...consulta,
      [e.target.name] : e.target.value
    })
  }

  // Creo la funcion para enviar el formulario y validar los datos

  const submitForm = e => {
    // Evito que envie la consulta por HTML

    e.preventDefault();


    // Valido el ingreso

    if (ciudad.trim() === '' || pronostico.trim() === '') {
      console.log("Completa todos los campos!");
      setError(true);
      setMensajeError("Completa todos los campos!");
      return;
    }

    // Quito el error

    setError(false);


    // Envio el request a la API

    consultarApi(ciudad);


    // Limpio el Form

    setConsulta({
      ciudad: '',
      pronostico: ''
    });
  }

  return (
    <Fragment>
      <Form onSubmit={submitForm}>
        <Form.Row>
          <Col></Col>

          <Col >
            <Form.Control 
              type="text" 
              placeholder="Ingrese una ciudad" 
              name='ciudad'
              value= {ciudad}
              onChange={handleChange}
            />
          </Col>

          <Col>
            <Form.Control
              as="select"
              name='pronostico'
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              value={pronostico}
              onChange={handleChange}
              custom
            >
              <option value="0">Tipo de pronóstico...</option>
              <option value="1">Actual</option>
              <option value="2">Extendido</option>
            </Form.Control>
          </Col>
          
          <Button 
            variant="primary"
            type= "submit"
          >Consultar
          </Button>

          <Col></Col>
        </Form.Row>
      </Form>
    </Fragment>
  );
}

export default Formulario;