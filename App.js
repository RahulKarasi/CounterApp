// import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CounterApp from './src/counterApp/CounterApp';
import OtpScreen from './src/otp_screen/OtpScreen';
import OttScreen from './src/ott_screen/OttScreen';
import HomeScreen from './HomeScreen';
import HexCode from './src/color_code_viewer/HexCode';
import WebViewComp from './src/component2/WebViewComp';
import SwitchSlider from './src/component2/SwitchSlider';
import SectionLists from './src/component4SectionList/SectionLists';
import BackPressAlert from './src/component5_clipBoard/BackPressAlert';
import TextAnimation from './src/animation/TextAnimation';
import AnimationTask2 from './src/animation/AnimationTask2';
import ReactHooks from './src/reactHooks/ReactHooks';
import AsyncStorageSignUp from './src/persistanceStore/AsyncStorageSignUp';
import AsyncHome from './src/persistanceStore/AsyncHome';

const Stack = createNativeStackNavigator();
export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AsyncStorageSignUp" component={AsyncStorageSignUp}/>
          <Stack.Screen name="AsyncHome" component={AsyncHome} />
          <Stack.Screen name="hooks" component={ReactHooks} />
          <Stack.Screen name="AnimationTask2" component={AnimationTask2} />
          <Stack.Screen name="Animation" component={TextAnimation} />
          <Stack.Screen name="BackPressAlert" component={BackPressAlert} />
          <Stack.Screen name="SectionList" component={SectionLists} />
          <Stack.Screen name="SwitchSlider" component={SwitchSlider} />
          <Stack.Screen name="WebView" component={WebViewComp} />
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
