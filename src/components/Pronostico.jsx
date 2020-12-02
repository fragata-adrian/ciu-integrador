import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

const Pronostico = ({ clima }) => {

  // Extraigo los valores que necesito
  const weather = clima.weather[0];
  const { icon, description } = weather;
  const { temp, temp_min, temp_max, humidity } = clima.main;
  const imagen = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png';
  
  return (
    <Fragment>
      <h3>Tiempo en {clima.name}</h3>
      <Image src={imagen} rounded />
      <p>{(temp - 273.15).toFixed(1)}°</p>
      <p>{description}</p>
      <p>min {(temp_min - 273.15).toFixed(1)} - max {(temp_max - 273.15).toFixed(1)}</p>
      <p>Humedad {humidity}%</p>
    </Fragment>
  );
}

export default Pronostico;