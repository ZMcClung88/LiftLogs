import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import DashScreen from './screens/DashScreen';

export default class App extends Component {
  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        welcome: WelcomeScreen,
        auth: AuthScreen,
        main: DashScreen
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        lazy: true,
        animationEnabled: false
      }
    );

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
