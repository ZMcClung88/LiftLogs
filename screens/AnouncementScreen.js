import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import MyButton from '../components/myButton';
import Weather from '../components/Weather';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AnouncementScreen extends Component {
  state = { notes: '', hide: false };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Announcements',
      tabBarIcon: () => {
        return <Icon name="favorite" size={30} />;
      },
      headerTintColor: 'royalblue',
      headerStyle: {
        backgroundColor: '#1e304f'
      }
    };
  };

  onChangeText = value => {
    this.setState({ notes: value });
    console.log('value', this.state.notes);
  };

  toggleHide = () => {
    console.log('state', this.state.notes);
    this.setState({ hide: true });
  };

  _renderHide = () => {
    if (!this.state.hide) {
      return (
        <TextInput
          // style={{ display: this.state.isHidden ? 'none' : null }}
          onChangeText={this.onChangeText}
          value={this.state.notes}
          multiline
          autoCorrect
          autoFocus
          style={styles.textInputStyle}
          editable={true}
          maxLength={250}
        />
      );
    } else {
      return (
        <View
          style={{
            height: 175,
            width: SCREEN_WIDTH * 0.9,
            borderColor: 'gray',
            backgroundColor: 'lightblue',
            marginTop: 10
          }}
        >
          Notes: {this.state.notes}
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView
        style={{
          flexDirection: 'column',
          height: SCREEN_HEIGHT,
          padding: 20,
          backgroundColor: '#596479'
        }}
      >
        <View>
          <Weather />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontStyle: 'italic' }}>Today's Notes:</Text>
          {this._renderHide()}
        </View>
        <MyButton text="Done" style={styles} onPress={this.toggleHide.bind(this)} />
      </ScrollView>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 175,
    width: SCREEN_WIDTH * 0.9,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 15,
    fontSize: 18,
    borderRadius: 5,
    marginTop: 10
  },
  myButtonContainer: {
    // flex: 1,
    height: 50,
    width: SCREEN_WIDTH * 0.9,
    borderRadius: 3,
    backgroundColor: '#1e304f',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  myButtonStyle: {
    color: '#F3D92D',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

export default AnouncementScreen;
