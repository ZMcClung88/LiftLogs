import React, { Component } from 'react';
import { View, Text } from 'react-native';

const SLIDE_DATA = [
  { text: 'Welcome to Lift Logs', color: '#03A9F4' },
  { text: 'Use this to keep track of employees', color: '#009688' },
  { text: 'View Schedules', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to the Welcome Screen!</Text>
        <Text>Welcome to the Welcome Screen!</Text>
        <Text>Welcome to the Welcome Screen!</Text>
        <Text>Welcome to the Welcome Screen!</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
