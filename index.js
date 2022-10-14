/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';


// import App from './counterApp/App';
// import Login from './Login';
// import OttScreen from './ott_screen/OttScreen';
import OtpScreen from './otp_screen/OtpScreen';

AppRegistry.registerComponent(appName, () => OtpScreen);
