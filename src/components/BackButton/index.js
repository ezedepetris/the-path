import React from 'react';
import { TextInput, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const BackButton = (props) => {
  const { onBack, inputStyle } = props;
  return (
    <Animated.View style={styles.view}>
      <Icon
        name="ios-arrow-round-back"
        color="#C6C6C6"
        style={styles.icon}
        onPress={onBack}
      />
    </Animated.View>
  );
};

export default BackButton;

BackButton.defaultProps = {
  style: {},
  inputStyle: {},
  onBack: () => {},
};

BackButton.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  onBack: PropTypes.func,
};
