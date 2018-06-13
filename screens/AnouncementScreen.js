import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Weather from '../components/Weather';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AnouncementScreen extends Component {
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
          <TextInput multiline autoCorrect autoFocus style={styles.textInputStyle} editable={true} maxLength={250} />
          <Button title="Done" />
        </View>
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
    borderRadius: 5
  }
};

export default AnouncementScreen;
