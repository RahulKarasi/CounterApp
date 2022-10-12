/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './counterApp/App';
import {name as appName} from './app.json';
// import Login from './Login';
import OttScreen from './ott_screen/OttScreen';

AppRegistry.registerComponent(appName, () => OttScreen);
