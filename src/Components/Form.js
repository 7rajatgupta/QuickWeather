import React, { Component } from 'react';

class Form extends Component{
  render(){
    return(
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Enter City..."></input>
        <input type="text" name="country" placeholder="Enter Country..."></input>
        <button type="Submit" name="fetchButton">Get Weather</button>
      </form>
    );
  }

}
export default Form;
