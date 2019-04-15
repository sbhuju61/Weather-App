import React, { Component } from 'react';
import './App.css';
import {Form, FormGroup, Label,Input,Button} from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);
  

    
   
  }
  render() {
    const labels = ["Latitude","Longitude"]
  
    return (
        <Form onSubmit={this.processForm}>
        
        {labels.map(label => { return(
          <FormGroup key={label}>
          <Label for={label}>{label}</Label>
          <Input type="text" name={label} id={label} placeholder={label} required/>
        </FormGroup>)
        })
      }
       
      <FormGroup className = {"text-center"}>
      <Button type="submit" >Submit</Button>
      </FormGroup>
      </Form>
     
   
      
    );
  }

  processForm (event){
    event.preventDefault();

    const weatherFormData = new FormData (event.target);
   
    const latitude = weatherFormData.get('Latitude');
    const longitude = weatherFormData.get('Longitude');
    const openWeatherRequest = new XMLHttpRequest();
    const apiKey = "1c6c28d74a5ed7917aa2cc1522e76d68"
    
    openWeatherRequest.open('GET', `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`, true)
    
    openWeatherRequest.onload =  ()=>{
        const openWeatherResponse = JSON.parse(openWeatherRequest.response);
        this.setState({"weather":openWeatherResponse})
        this.props.updateWeather(openWeatherResponse)
    }

    openWeatherRequest.send()
  }







}

export default Home;