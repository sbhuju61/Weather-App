import React, { Component } from 'react';

import './App.css';
import {Container, Jumbotron} from 'reactstrap';
import WeatherForm from "./WeatherForm";

class Home extends Component {
  render() {
    return (
        <Container>
       
      <Jumbotron>
        <h1 className="display-3 text-center">Weather App</h1>
        <p className="lead">This is Weather App made using React</p>
        
      </Jumbotron>
      <WeatherForm></WeatherForm>
    
        </Container>
    );
  }
}

export default Home;
