import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Easing,
  AsyncStorage,
  StatusBar,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import getLocation from '../../services/getLocation';
import { permissionCheck, permissionFor } from '../../services/permissions';
import styles from './styles';
import { PERMISSIONS } from 'react-native-permissions';


const { width, height } = Dimensions.get('window');

class Splash extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false
    }

    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
    this.startUp();
  }

  async startUp() {
    try {
      this.props.getDirections();
      // let locationEnabled = await permissionCheck(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      let locationEnabled = await permissionFor(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (locationEnabled) {
        const location = await getLocation();
        this.props.setLocation(location);
        this.props.navigation.navigate('Main');
      }
        // this.props.getLocation(location);
    } catch(e) {
      console.log("ERROR ON REQUEST PERMISSION: ", e)
    }
  }

  animate() {
    const createAnimation = (value, duration, easing, delay = 0) => Animated.timing(value, {
      toValue: 1,
      duration,
      easing,
      delay,
    });
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);
    this.animatedValue4.setValue(0);

    Animated.parallel([
      createAnimation(this.animatedValue1, 800, Easing.ease, 200),
      createAnimation(this.animatedValue2, 600, Easing.ease),
      createAnimation(this.animatedValue3, 800, Easing.ease, 200),
      createAnimation(this.animatedValue4, 800, Easing.ease, 200),
    ]).start();
  }

  render() {
    const textOpac = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const ImageAnim = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [-380, height],
    });
    const scaleText = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [0.95, 1],
    });
    const topMargin = this.animatedValue4.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0],
    });
    const { navigation } = this.props;

    return (
      <View style={styles.containerTop}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.containerTop}>
          <View style={styles.container1}>
            <Animated.View
              style={[
                {
                  opacity: textOpac,
                  marginTop: topMargin,
                },
                styles.flex1,
              ]}
            >
              <LinearGradient
                colors={['#00FEDA', '#4FACFE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
              >
                <Animated.View
                  style={[
                    styles.body,
                    {
                      transform: [{ scale: scaleText }],
                    },
                  ]}
                >
                  <View style={styles.main}>
                    <Text style={styles.welcome}>Welcome.</Text>
                    <Text style={styles.description}>
                      Start planning your next adventure!
                      {' '}
                    </Text>
                  </View>
                </Animated.View>
              </LinearGradient>
            </Animated.View>
          </View>
        </View>
        <Animated.View style={{ bottom: ImageAnim, position: 'absolute' }}>
        </Animated.View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLocation: (location) => dispatch({ type: 'SET_LOCATION', location }),
  getDirections: () => dispatch({ type: 'GET_DIRECTIONS' })
})

export default connect(null, mapDispatchToProps)(Splash)

Splash.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Splash.defaultProps = {
  navigation: {},
};
