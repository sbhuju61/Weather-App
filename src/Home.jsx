import React, { Component } from 'react';

import './App.css';
import {Container, Jumbotron} from 'reactstrap';
import WeatherForm from "./WeatherForm";
import WeatherCard from './WeatherCard';

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {weather: {}};
  this.updateWeather = this.updateWeather.bind(this);
  }
  render() {
    
    return (
        <Container>
       
      <Jumbotron>
        <h1 className="text-center" style={{"fontSize": "9vw"}}>Weather App</h1>
        <p className="lead">This is Weather App made using React</p>
        
      </Jumbotron>
      <WeatherForm updateWeather={this.updateWeather} ></WeatherForm>
     {this.renderWeatherCard()}
        </Container>
    );
  }

  

  updateWeather(weather){
    //console.log("Home",weather)
    this.setState({"weather":weather})
  }

  renderWeatherCard () {

     if(Object.entries(this.state.weather).length > 0){
      return (<WeatherCard weatherData={this.state.weather}></WeatherCard>)
      }

  }
}

export default Home;
