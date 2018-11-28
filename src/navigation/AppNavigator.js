
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import NewTag from '../pages/NewTag';

const AppNavigator = createSwitchNavigator ({
    Main: MainTabNavigator,
    NewTagScreen: NewTag
}, {
  backBehavior: 'initialRoute'
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;