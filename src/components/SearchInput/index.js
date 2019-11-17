import React from 'react';
import { TextInput, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchInput = (props) => {
  const { onSearchPress, inputStyle } = props;
  return (
    <Animated.View style={styles.view}>
      <Icon
        name="search"
        color="#C6C6C6"
        style={styles.icon}
        onPress={onSearchPress}
      />
      <TextInput
        placeholder="Search a destination"
        placeholderTextColor="#C6C6C6"
        {...props}
        style={[styles.input, inputStyle]}
      />
    </Animated.View>
  );
};

export default SearchInput;

SearchInput.defaultProps = {
  style: {},
  inputStyle: {},
  onSearchPress: () => {},
  ref: () => {},
  noRightIcon: false,
};

SearchInput.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  onSearchPress: PropTypes.func,
  ref: PropTypes.func,
  noRightIcon: PropTypes.bool,
};
