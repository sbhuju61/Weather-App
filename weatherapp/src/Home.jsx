import React, { Component } from 'react';

import './App.css';
import {Container, Row, Col,Jumbotron,Button} from 'reactstrap';
class Home extends Component {
  render() {
    return (
        <Container>
       
      <Jumbotron>
        <h1 className="display-3 text-center">Weather App</h1>
        <p className="lead">This is Weather App made using React</p>
        
      </Jumbotron>
    
        </Container>
    );
  }
}

export default Home;
