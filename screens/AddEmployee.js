import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

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
    // alignItems: 'center'
    // width: SCREEN_WIDTH,
    // height: SCREEN_HEIGHT
  },
  buttonStyle: {
    flex: 1,
    marginTop: 150
  }
};

export default AddEmployee;
