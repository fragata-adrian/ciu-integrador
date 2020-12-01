import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button } from 'react-bootstrap';

const Formulario = ({ consultarApi }) => {
  return (
    <Fragment>
      <Form onSubmit={consultarApi}>
        <Form.Row>
          <Col></Col>
          <Col >
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Selecciona una ciudad...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Col>

          <Col>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
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
          >
            Consultar
          </Button>

          <Col></Col>
        </Form.Row>
      </Form>
    </Fragment>
  );
}

export default Formulario;