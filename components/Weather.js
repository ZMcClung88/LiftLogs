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

const url = `${ROOT_URL}&lat=${LAT}&lon=${LON}&cnt=5`;

class Weather extends Component {
  state = {
    weather: []
  };

  componentWillMount() {
    this.props.fetchWeather();
    // console.log('please log');
    // axios.get(url).then(response => {
    //   this.setState({ weather: response.data });
    // });
  }

  render() {
    // const data = this.state.weather;
    // const condition = _.map(data.weather, obj => obj.main);
    // const highTemp = _.map(this.state, obj => obj);
    // console.log('main', highTemp);
    return (
      <View>
        <Text>Today's Weather</Text>
        {/* <Text>{condition``}</Text> */}
        {/* <Text>{highTemp}</Text> */}
        {/* <Text>Current: {_.round(9 / 5 * (data.temp - 273) + 32)} &deg;F</Text>
        <Text>Max Temp: {_.round(9 / 5 * (data.temp_max - 273) + 32)} &deg;F</Text>
        <Text>Min Temp: {_.round(9 / 5 * (data.temp_min - 273) + 32)} &deg;F</Text> */}
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   const weatherData = state.weather;
//   return weatherData;
// };

export default connect(null, { fetchWeather })(Weather);
