import React, { Component } from 'react';
import { TextInput, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }
  }

  componentDidMount(){
    this.setState({ visible: this.props.visible })
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.visible != this.state.visible);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.visible !== this.props.visible) {
      this.setState({ visible: nextProps.visible})
    }
  }

  render() {
    const { onSearchPress, inputStyle, visible } = this.props;

    const searchAnimation = new Animated.Value(0);
    Animated.timing(searchAnimation, {
      toValue: 1,
      duration: 600,
    }).start();

    let outputRange = visible ? [-100, 0] : [0, -100]

    const containerStyle = {
      transform: [{
          translateY: searchAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: outputRange,
          })
      }],
    };

    return (
      <Animated.View style={[containerStyle, styles.view]}>
        <Icon
          name="search"
          color="#C6C6C6"
          style={styles.icon}
          onPress={onSearchPress}
        />
        <TextInput
          placeholder="Search a destination"
          placeholderTextColor="#C6C6C6"
          {...this.props}
          style={[styles.input, inputStyle]}
        />
      </Animated.View>
    );
  };
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
