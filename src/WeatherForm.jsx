import React, { Component } from 'react';
import './App.css';
import {Form, FormGroup, Label,Input,Button} from 'reactstrap';

class Home extends Component {
  render() {
    return (
        <Form onSubmit={this.processForm}>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="City" pattern ="^[a-zA-Z ]*$" title ="Please type alphabets only"/>
        </FormGroup>
        <FormGroup>
          <Label for="country">Country</Label>
          <Input type="text" name="country" id="country" placeholder="Country" pattern ="^[a-zA-Z ]*$" title ="Please type alphabets only"/>
        </FormGroup>
     
        <Button type="submit">Submit</Button>
      </Form>
    );
  }

  processForm (event){
    event.preventDefault();

    const weatherFormData = new FormData (event.target);
   
    const city = weatherFormData.get('city');
    const country = weatherFormData.get('country');
    const openWeatherRequest = new XMLHttpRequest();
    const apiKey = "1a331de66eeace55d2a3200ffc35e52e"

    openWeatherRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`, true)

    openWeatherRequest.onload = function (){
        const openWeatherResponse = JSON.parse(openWeatherRequest.response);
        console.log(openWeatherResponse);
    }

    openWeatherRequest.send()
  }
}

export default Home;