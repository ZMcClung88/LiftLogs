import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';

class AddEmployee extends Component {
  onButtonPress = () => {
    AsyncStorage.removeItem('fb_token', () => {
      this.props.navigation.navigate('welcome');
    });
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text>Add Emps</Text>
        <Text>Add Emps</Text>
        <Text>Add Emps</Text>
        <Text>Add Emps</Text>
        <Text>Add Emps</Text>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  }
};

export default AddEmployee;
