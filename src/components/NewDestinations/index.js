import React, { Component } from 'react';
import { TextInput, View, Animated, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from '../../components/GradientButton';
import styles from './styles';

const { height } = Dimensions.get('window');

class NewDestinations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addresses: [],
      visible: false,
      execAnimation: false
    }
  }

  componentDidMount(){
    this.setState({ visible: this.props.visible, addresses: this.props.addresses })
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
          // outputRange: outputRange,
        })
      }],
    };

    return (
      <Animated.View style={[containerStyle, styles.container]}>
        <GradientButton
          text={'Done'}
          style={{ alignSelf:'flex-end', marginRight: 10, marginBottom: 5, top:0, paddingVertical: 5}}
          onPress={this.props.close}
        />
       <View style={styles.flatListContainer}>
          <FlatList
            data={this.props.addresses}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            style={styles.flatList}
            keyExtractor={item => item.placeId}
          />
        </View>
      </Animated.View>
    )
  }

  renderItem (item, index) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.addNewDestination(item)} >
        <GradientButton
          text={'+'}
          style={{ alignSelf: 'flex-end', marginBottom: 5, paddingVertical: 5}}
        />
        <View style={{ flexDirection: 'column'}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewDestinations;

NewDestinations.defaultProps = {
  style: {},
  inputStyle: {},
  addNewDestination: () => {},
  close: () => {},
  addresses: [],
};

NewDestinations.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  addNewDestination: PropTypes.func,
  close: PropTypes.func,
  addresses: PropTypes.array,
};
