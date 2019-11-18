import React, { Component } from 'react';
import { TextInput, View, Animated, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from '../../components/GradientButton';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Indications extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: true,
      visible: false
    }
  }

  componentDidMount(){
    this.setState({ visible: this.props.visible })
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.visible != this.state.visible) || (nextState.openModal != this.state.openModal) || (nextProps.visible && nextState.openModal);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.visible !== this.props.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }
      
  render() {
    this.modalAnimation = new Animated.Value(0);

    Animated.timing(this.modalAnimation, {
      toValue: 1,
      duration: 600,
    }).start();

    let outputRange =[]

    if (!this.state.visible && !this.state.openModal)
      outputRange = [(height * 0.7), (height * 0.8)]
    else if (!this.state.visible)
      outputRange = [0, (height * 0.8)]
    else if (this.state.openModal)
      outputRange = [(height * 0.7), 0]
    else
      outputRange = [0, (height * 0.7)]

    const containerStyle = {
      transform: [{
        translateY: this.modalAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: outputRange,
        })
      }],
    };

    return (
      <Animated.View style={[containerStyle, styles.container]}>
        <GradientButton
          text={this.state.openModal ? "Close" : "Instructions"}
          style={{ alignSelf:'flex-end', marginRight: 10, paddingVertical: 5 }}
          onPress={() => this.setState(state => ({openModal: !state.openModal})) }
        />
        <Animated.View style={styles.flatListContainer}>
          <FlatList
            data={this.props.indications.steps}
            renderItem={this.renderItem}
            style={styles.flatList}
            keyExtractor={(item, index) => index}
          />
        </Animated.View>
      </Animated.View>
    )
  }

  renderItem({item, index}) {
    return (
      <View style={styles.item}>
        <View style={{ flexDirection: 'column'}}>
          <HTML style={styles.title} html={item.text} imagesMaxWidth={Dimensions.get('window').width} />
        </View>
      </View>
    );
  }
}

export default Indications;

Indications.defaultProps = {
  style: {},
  inputStyle: {},
  indications: {},
};

Indications.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  indications: PropTypes.object,
};
