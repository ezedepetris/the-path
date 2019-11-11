import React from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Provider } from 'react-redux';
// import config from '../config';
import Routes from './routes';
import configureStore from './store';
// import styles from './styles/commonStyles';

export const store = configureStore();

// export const startUp = async () => {
//   await store.dispatch({ type: 'GET_USER' });
//   store.dispatch({ type: 'GET_INFORMATION', category: DEFAULT_INIT_CATEGORIES });
// }

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.navigator = null;
  }

  navigateTo(screen) {
    if (this.navigator) {
      const action = NavigationActions.navigate({
        routeName: screen,
      });
      this.navigator.dispatch(action);
    }
  }

  bootCheck(navigator) {
    this.navigator = navigator;
    this.checkPermissions();
  }

  async checkPermissions() {
    try {
      if (true) {
        console.log("hola")
        this.navigateTo('MainMap');
      } else {
        console.log("hola")
        // this.navigateTo('Location');
      }
    } catch(error) {
      this.logout()
      console.log("ERROR ON CHECK PERMISSIOS", error)
    }
  }
  render() {
        // <View style={styles.flex1}>
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
        // <Routes ref={navigator => this.bootCheck(navigator)} />
  }
}
