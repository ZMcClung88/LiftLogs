import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Weather from '../components/Weather';

class AnouncementScreen extends Component {
  render() {
    return (
      <View>
        <Weather />
      </View>
    );
  }
}

export default AnouncementScreen;
