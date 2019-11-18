import React, { Component } from 'react';
import { TextInput, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';

class BackButton extends Component {
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
    const { onBack, inputStyle, visible } = this.props;

    const backAnimation = new Animated.Value(0);
    Animated.timing(backAnimation, {
      toValue: 1,
      duration: 600,
    }).start();

    let outputRange = visible ? [-100, 0] : [0, -100]

    const containerStyle = {
      transform: [{
          translateX: backAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: outputRange,
          })
      }],
    };

    return (
      <Animated.View style={[containerStyle, styles.view]}>
        <Icon
          name="ios-arrow-round-back"
          color="#C6C6C6"
          style={styles.icon}
          onPress={onBack}
        />
      </Animated.View>
    );
  }
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
