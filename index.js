/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Setup from "./android/config/firebase"


AppRegistry.registerComponent(appName, () => Setup);
