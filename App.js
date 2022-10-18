// import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CounterApp from './counterApp/CounterApp';
import OtpScreen  from './otp_screen/OtpScreen';
import OttScreen from './ott_screen/OttScreen'
import HomeScreen from './HomeScreen';
import HexCode from './color_code_viewer/HexCode'

const Stack = createNativeStackNavigator();
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CounterApp" component={CounterApp} />
          <Stack.Screen name="OttScreen" component={OttScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="ColorViewer" component={HexCode} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
