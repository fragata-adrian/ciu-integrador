import React, { Fragment } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = ({ error }) => {
  return (
    <Fragment>
      <Alert variant='danger'>
        {error}
      </Alert>
    </Fragment>
  );
}

export default Error;