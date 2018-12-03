/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Client } from 'bugsnag-react-native';

const bugsnag = new Client("d9d2ae18a5be7c40a9a093e65731930a");



AppRegistry.registerComponent(appName, () => App);
