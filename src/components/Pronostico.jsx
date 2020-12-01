import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import img01d from '../images/01d.png';
import img01n from '../images/01d.png';
import img02d from '../images/01d.png';
import img02n from '../images/01d.png';
import img03d from '../images/01d.png';
import img03n from '../images/01d.png';
import img04d from '../images/01d.png';
import img04n from '../images/01d.png';
import img09d from '../images/01d.png';
import img09n from '../images/01d.png';
import img10d from '../images/01d.png';
import img10n from '../images/01d.png';
import img11d from '../images/01d.png';
import img11n from '../images/01d.png';
import img13d from '../images/01d.png';
import img13n from '../images/01d.png';
import img50d from '../images/01d.png';
import img50n from '../images/01d.png';

const Pronostico = ({icon, description, temp, temp_min, temp_max, humidity, name}) => {

  // Armo la ruta para ir a buscar la imagen correspondiente
  const image = "img"+icon;

  return (
    <Fragment>
        <h3>Tiempo en {name}</h3>
        <Image src={image} rounded />
        <p>{temp}</p>
        <p>{description}</p>
        <p>min {temp_min} - max {temp_max} </p>
        <p>{humidity}</p>
    </Fragment>
  );
}

export default Pronostico;