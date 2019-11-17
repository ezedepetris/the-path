import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from './services/Navigation';
import MainMap from './screens/MainMap';
import Location from './screens/Location';
import Notification from './screens/Notification';
import Splash from './screens/Splash';

const AppStackNavigator = createAppContainer(createStackNavigator(
  {
    MainMap: { screen: MainMap },
  },
  {
    initialRouteName: 'MainMap',    
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
));

const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash: { screen: props => <Splash {...props} /> },
    Notification: { screen: Notification },
    Location: { screen: Location },
    Main: {
      screen: props => (
        <AppStackNavigator
          screenProps={props}
          style={{ backgroundColor: '#fff' }}
        />
      ),
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppSwitchNavigator);
