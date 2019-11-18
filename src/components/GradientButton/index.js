import React from 'react';
import { TouchableHighlight, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

const GradientButton = (props) => {
  const {
    style, textStyle, text, onPress,
  } = props;
  return (
    <TouchableHighlight
      underlayColor="transparent"
      {...props}
      onPress={onPress}
    >
      <LinearGradient
        colors={['#fe981c', '#d41bde']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.touchableHighlight, style]}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};

export default GradientButton;

GradientButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

GradientButton.defaultProps = {
  text: '',
  style: {},
  textStyle: {},
};
