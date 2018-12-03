/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BackgroundJob from "react-native-background-job";

AppRegistry.registerComponent(appName, () => App);
