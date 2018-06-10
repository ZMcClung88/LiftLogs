import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyButton extends Component {
  render() {
    console.log();
    return (
      <View style={styles.myButtonContainer}>
        <Text style={styles.myButtonStyle}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = {
  myButtonContainer: {
    // flex: 1,
    height: 125,
    width: 125,
    borderRadius: 50,
    backgroundColor: '#F3D92D',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10
  },
  myButtonStyle: {
    color: '#1e304f',
    fontSize: 20,
    textAlign: 'center'
  }
};

export default MyButton;
