// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NavigationService from './services/Navigation';
import MainMap from './screens/MainMap';
import Location from './screens/Location';
import Notification from './screens/Notification';
import Splash from './screens/Splash';
// const AppTabNavigator = createTabNavigator(
//   {
//     Main: {
//       screen: props => <Explore {...props} />,
//       path: '',
//     },
//     Upcoming: {
//       screen: props => <Upcoming {...props} />,
//       path: '',
//     },
//     BuckList: {
//       screen: props => <Places {...props} client={client} />,
//       path: '',
//     },
//     Profile: {
//       screen: props => <Profile {...props} client={client} />,
//       path: '',
//     },
//     // Places: {
//     //   screen: BucketList,
//     // },
//   },
//   {
//     initialRouteName: 'Main',
//     headerMode: 'none',
//     tabBarPosition: 'bottom',
//     tabBarComponent: props => <AppFooter {...props} />,
//     tabBarOnPress: (navigation) => {
//       // Scroll to top
//       if (navigation.state.index === 0) {
//         const navigationInRoute = navigation.getChildNavigation(
//           navigation.state.routes[0].key,
//         );

//         if (
//           !!navigationInRoute
//           && navigationInRoute.isFocused()
//           && !!navigationInRoute.state.params
//           && !!navigationInRoute.state.params.scrollToTop
//         ) {
//           navigationInRoute.state.params.scrollToTop();
//         } else {
//           navigation.navigate(navigation.state.key);
//         }
//       }
//     },
//     animationEnabled: true,
//     swipeEnabled: true,
//   },
// );

const AppStackNavigator = createAppContainer(createStackNavigator(
  {
    MainMap: { screen: MainMap },
    Location: { screen: Location },
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
    Boot: { screen: props => <View /> },
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
    initialRouteName: 'Main',
  },
);

export default createAppContainer(AppSwitchNavigator);
