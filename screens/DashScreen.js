import React, { Component } from 'react';
import { View, Text, Dimensions, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import MyButton from '../components/myButton';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class DashScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Dashboard',
      tabBarIcon: () => {
        return <Icon name="favorite" size={30} />;
      },
      headerLeft: (
        <Button
          title="Menu"
          onPress={() => navigation.navigate('menu')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      )
    };
  };

  onButtonPress = () => {
    AsyncStorage.removeItem('fb_token', () => {
      this.props.navigation.navigate('welcome');
    });
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          {/* <Button
            buttonStyle={styles.groupButtonStyle}
            large
            title="Schedule"
            titleStyle={{ fontWeight: 900 }}
            color="#1e304f"
          />
          <Button
            buttonStyle={styles.groupButtonStyle}
            large
            title="Notes"
            titleStyle={{ fontWeight: 900 }}
            color="#1e304f"
          /> */}
          <MyButton text="Schedule" />
          <MyButton text="Notes" />
          <MyButton text="Add Employee" />
          <MyButton text="Add Lift" />
        </View>
        <View>
          <Button title="Logout" backgroundColor="red" icon={{ name: 'delete-forever' }} onPress={this.onButtonPress} />
        </View>
      </View>
    );
  }
}

const styles = {
  groupButtonStyle: {
    borderRadius: 50,
    height: 125,
    width: 125,
    // marginTop: 20,
    backgroundColor: '#F3D92D'
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50
  },
  buttonContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  buttonStyle: {
    flex: 1
    // marginBottom: 50
  }
};

export default DashScreen;
