import React, { Component } from 'react';
import { TextInput, View, Animated, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientButton from '../GradientButton';
import { SwipeListView } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import styles from './styles';

const { height, width } = Dimensions.get('window');

class Destinations extends Component {

  constructor(props) {
    super(props)

    this.state = {
      directions: [],
      visible: true,
      execAnimation: false
    }
  }

  componentDidMount(){
    this.setState({ visible: this.props.visible, directions: this.props.directions })
  }

  componentWillReceiveProps(nextProps){
    let execAnimation = false

    if (nextProps.visible !== this.state.visible)
      this.setState({ visible: nextProps.visible, execAnimation: true })
    else
      this.setState({ execAnimation: false })
  }

  render() {
    this.modalAnimation = new Animated.Value(0);

    Animated.timing(this.modalAnimation, {
      toValue: 1,
      duration: 600,
    }).start();

    let outputRange =[]
    
    if (!this.state.execAnimation && this.state.visible)
      outputRange = [0, 0]
    else if (!this.state.execAnimation)
      outputRange = [(height * 0.8), (height * 0.8)]
    else if (this.state.visible)
      outputRange = [(height * 0.8), 0]
    else
      outputRange = [0, (height * 0.8)]

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
        <View style={{flexDirection: 'row', width: width}}>
          <Text style={styles.header}>Destinations</Text>
          <GradientButton
            text={'Directions'}
            style={{ justifyContent:'flex-end', marginRight: 10, marginBottom: 5, top:0, paddingVertical: 5}}
            onPress={this.props.navigateToDirections}
          />
        </View>
        <SwipeListView
          useFlatList
          data={this.props.directions}
          renderItem={this.renderItem.bind(this)}
          renderHiddenItem={this.renderLeftItem.bind(this)}
          disableLeftSwipe
          leftOpenValue={70}
          style={styles.flatList}
          keyExtractor={item => item.placeId}
        />
      </Animated.View>
    );
  }

  renderItem ({item, index}) {
    return (
      <View style={styles.item} >
        <Text style={styles.title}>({index+1}) {item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    )
  }

  renderLeftItem (data, rowMap) {
    return (
      <TouchableOpacity onPress={() => this.props.removeDestination(data.item.placeId) } style={styles.iconContainer}>
        <Icon
          name="ios-trash"
          style={styles.icon}
        />
      </TouchableOpacity>
    )
  }
}
export default Destinations;

Destinations.defaultProps = {
  style: {},
  inputStyle: {},
  removeDestination: () => {},
  navigateToDirections: () => {},
  noRightIcon: false,
};

Destinations.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  removeDestination: PropTypes.func,
  navigateToDirections: PropTypes.func,
  noRightIcon: PropTypes.bool,
};
