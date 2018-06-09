import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import DashScreen from './screens/DashScreen';
import AddEmployee from './screens/AddEmployee';
import AddLift from './screens/AddLift';
import AnouncementScreen from './screens/AnouncementScreen';
import EmployeeList from './screens/EmployeeList';
import LiftList from './screens/LiftList';

export default class App extends Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      auth: AuthScreen,
      main: DashScreen
    });

    return (
      <View style={styles.container}>
        {/* <Text>App!</Text>
        <WelcomeScreen />
        <AuthScreen />
        <DashScreen /> */}
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
