import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ consultarApi, setError, setMensajeError }) => {

  // Creo el state para almacenar los datos de la consulta

  const [consulta, setConsulta] = useState({
    ciudad: ''
  });

  // Extraigo los valores del state de la consulta

  const { ciudad } = consulta;

  // HandleChange para ir leyendo lo que el usuario escribe

  const handleChange = e => {
    setConsulta({
      [e.target.name] : e.target.value
    })
  }

  // Creo la funcion para enviar el formulario y validar los datos

  const submitForm = e => {
    // Evito que envie la consulta por HTML

    e.preventDefault();


    // Valido el ingreso

    if (ciudad.trim() === '') {
      console.log("Por favor ingresa el nombre de una ciudad.");
      setError(true);
      setMensajeError("Por favor ingresa el nombre de una ciudad.");
      return;
    }

    // Quito el error

    setError(false);


    // Envio el request a la API

    consultarApi(ciudad);


    // Limpio el Form

    setConsulta({
      ciudad: '',
    });
  }

  return (
    <div style={
      {
        backgroundColor: 'rgba(255, 255, 255, 0.301)',
        borderRadius: '10px'
      }
    }>
      <Form onSubmit={submitForm}>
        <Form.Row>
          <Col></Col>

          <Col>
            <Form.Control 
              type="text" 
              placeholder="Ingresa el nombre de una ciudad" 
              name='ciudad'
              value= {ciudad}
              onChange={handleChange}
            />
          </Col>

          <Button 
            variant="primary"
            type= "submit"
          >Consultar
          </Button>

          <Col></Col>
        </Form.Row>
      </Form>
    </div>
    
  );
}

export default Formulario;