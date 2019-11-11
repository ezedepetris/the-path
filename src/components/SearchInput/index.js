import React from 'react';
import { TextInput, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchInput = (props) => {
  const {
    style,
    onSearchPress,
    inputStyle,
    onSliderPress,
    noRightIcon,
  } = props;
  return (
    <Animated.View style={[styles.view, style]}>
      <Icon
        name="search"
        color="#C6C6C6"
        style={styles.icon}
        onPress={onSearchPress}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#C6C6C6"
        {...props}
        style={[styles.input, inputStyle]}
      />
      {!noRightIcon && (
        <Icon
          name="sliders"
          color="#C6C6C6"
          style={styles.icon}
          onPress={onSliderPress}
        />
      )}
    </Animated.View>
  );
};

export default SearchInput;

SearchInput.defaultProps = {
  style: {},
  inputStyle: {},
  onSearchPress: () => {},
  onSliderPress: () => {},
  noRightIcon: false,
};

SearchInput.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  onSearchPress: PropTypes.func,
  onSliderPress: PropTypes.func,
  noRightIcon: PropTypes.bool,
};
