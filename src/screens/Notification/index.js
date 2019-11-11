// @flow

import React from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
// import AccessButton from '../../components/AccessButton';
import styles from './styles';
// import notificationPermission from '../../hoc/notificationPermission';

// const image = require('../../assets/images/pushNotification.jpg');

      // <ImageBackground style={styles.container} source={image}>
class Notification extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    return (
      <View>
        <View style={styles.main}>
          <Text style={styles.shareLocation}>Allow Push Notifications</Text>
          <Text style={styles.description}>
            We will also notify you about things like new connections and
            popular locations.
          </Text>
          <Button
            onPress={ () => console.log("NOTIFICATIONSSSS SNSNSNSN") }
            text="Enable Notifications"
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    );
  }
}
      // </ImageBackground>

export default Notification;

Notification.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Notification.defaultProps = {
  navigation: {},
};
