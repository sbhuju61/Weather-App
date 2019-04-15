import React from 'react';
import moment from 'moment';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardFooter } from 'reactstrap';

const WeatherCard = (props) =>{
    console.log(props.weatherData.currently.apparentTemperature)
    
return(

<div>
      <Card>
        
        <CardBody>
        <span className="text-secondary">
          <CardTitle> {` Latitude ${props.weatherData.latitude} `} {` Longitude ${props.weatherData.longitude} `} </CardTitle>
          <CardSubtitle>{` ${moment().format('dddd h:mm a')} `} <br></br> {` ${props.weatherData.currently.summary} `} </CardSubtitle>
          </span>
          <CardText>
              
              <span className="float-left display-3">
            {` ${Math.round(props.weatherData.currently.apparentTemperature)} \u00b0F` } 
           </span> <br></br>

            <span className="float-right text-secondary">
            {` Precipitation: ${props.weatherData.currently.precipProbability} % `}<br></br>
            {` Wind: ${Math.round (props.weatherData.currently.windSpeed) } mph `}<br></br>
            {` Humidity: ${Math.round (props.weatherData.currently.humidity * 100) } % `}<br></br>
           
            </span> <br></br>
           
            </CardText>
          
        </CardBody>
        <CardFooter><a href="https://darksky.net/forecast/" target ="_blank" rel="noopener noreferrer">“Powered by Dark Sky”</a></CardFooter>
      </Card>
    </div>
)
            
}

 
export default WeatherCard;
