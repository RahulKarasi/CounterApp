import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CounterApp from './counterApp/CounterApp';
import OttScreen from './ott_screen/OttScreen';
import OtpScreen from './otp_screen/OtpScreen';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();
export class TabNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="CounterApp" component={CounterApp} />
          <Tab.Screen name="OttScreen" component={OttScreen} />
          <Tab.Screen name="OtpScreen" component={OtpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default TabNavigation;
