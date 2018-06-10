import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

class AddEmployee extends Component {
  onButtonPress = () => {
    AsyncStorage.removeItem('fb_token', () => {
      this.props.navigation.navigate('welcome');
    });
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          large
          title="Logout"
          backgroundColor="red"
          icon={{ name: 'delete-forever' }}
          onPress={this.onButtonPress}
        />
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonStyle: {
    flex: 1,
    marginTop: 150
  }
};

export default AddEmployee;
