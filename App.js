import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
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
    const MainNavigator = createBottomTabNavigator(
      {
        welcome: WelcomeScreen,
        auth: AuthScreen,
        main: createBottomTabNavigator({
          AddEmp: AddEmployee,
          AddLift: AddLift
        })
      },
      {
        navigationOptions: {
          tabBarVisible: false
        }
        // tabBarPosition: 'bottom',
        // swipeEnabled: false,
        // lazy: true,
        // animationEnabled: false
      }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <Text>App!</Text>
          <WelcomeScreen />
          <AuthScreen />
          <DashScreen /> */}
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
