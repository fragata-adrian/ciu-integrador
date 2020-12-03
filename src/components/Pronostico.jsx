import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pronostico = ({ clima }) => {

  // Extraigo los valores que necesito
  
  const { icon, description } = clima.weather[0];
  const { temp, temp_min, temp_max, humidity } = clima.main;
  const imagen = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png';
  
  return (
    <Fragment>
      <div className='Pronostico'>
        <h3>Tiempo en {clima.name}</h3>
        <Image src={imagen} rounded />
        <p>{(temp - 273.15).toFixed(1)}°</p>
        <p>{description.toUpperCase()}</p>
        <p>MIN {(temp_min - 273.15).toFixed(1)}° - MAX {(temp_max - 273.15).toFixed(1)}°</p>
        <p>HUMEDAD {humidity}%</p>
      </div>
    </Fragment>
  );
}

export default Pronostico;