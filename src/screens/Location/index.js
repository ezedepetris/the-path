import React from 'react';
import { Text, View, ImageBackground, StatusBar, Button } from 'react-native';
import PropTypes from 'prop-types';
// import AccessButton from '../../components/AccessButton/index';
import styles from './styles';

// const image = require('../../assets/images/shareLocation.jpg');

class Location extends React.Component {
  shareLocation(id) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("LOCATION");
      },
      error => console.log(error),
    );
  }

      // <ImageBackground style={styles.container} source={image}>
  render() {
    return (
      <View style={{ backgroundColor: "gray" }} >
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.main}>
          <Text style={styles.shareLocation}>Share Your Location</Text>
          <Text style={styles.description}>
						Enable location services so we can send you personalized
						notifications and help you find nearby places.

          </Text>
          <Button
            onPress={() => this.shareLocation(userId)}
            title="Share Location"
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}
      // </ImageBackground>

Location.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
};
Location.defaultProps = {
  navigation: {},
};

export default Location;
