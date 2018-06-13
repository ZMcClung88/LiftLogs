import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { fetchWeather } from '../actions/weather_actions';

const API_KEY = 'f9b3c4e0067e9d150a154256de430243';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// same as ^^^^ const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

//Solitude coordinates
const LAT = 40.619763;
const LON = -111.591896;

const url = `${ROOT_URL}&lat=${LAT}&lon=${LON}`;

class Weather extends Component {
  state = { weather: {} };

  componentDidMount() {
    // console.log('url', url);
    axios
      .get(url)
      .then(response => {
        // console.log(response.request._response);
        this.setState({ weather: response.request }, () => console.log('state!!!!!', this.state.weather));
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    const { _response } = _.map(this.state.weather, item => item);
    return (
      <View>
        <Text>Weather Component</Text>
        <Text>{_response}</Text>
      </View>
    );
  }
}

export default connect(null, { fetchWeather })(Weather);
