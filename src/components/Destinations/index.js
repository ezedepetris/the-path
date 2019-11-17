import React from 'react';
import { TextInput, View, Animated, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import styles from './styles';

const Destinations = ({directions, setDestination, removeDestination}) => (
 <View style={styles.container}>
    <Text style={styles.header} >Destinations</Text>
    <SwipeListView
      useFlatList
      data={directions}
      renderItem={({item, index}) => renderItem(item, index, setDestination)}
      renderHiddenItem={(data, rowMap) => renderLeftItem(data, rowMap, removeDestination)}
      disableLeftSwipe
      leftOpenValue={70}
      style={styles.flatList}
      keyExtractor={item => item.placeId}
    />
  </View>
);

const renderItem = (item, index, setDestination) => (
  <View style={styles.itemContainer} >
    <TouchableOpacity style={styles.item} onPress={() => setDestination(item.location) } >
      <Text style={styles.title}>({index+1}) {item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  </View>
);

const renderLeftItem = (data, rowMap, removeDestination) => (
  <TouchableOpacity onPress={() => removeDestination(data.item.placeId) } style={styles.iconContainer}>
    <Icon
      name="trash"
      style={styles.icon}
    />
  </TouchableOpacity>
)

export default Destinations;

Destinations.defaultProps = {
  style: {},
  inputStyle: {},
  onSearchPress: () => {},
  onSliderPress: () => {},
  noRightIcon: false,
};

Destinations.propTypes = {
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  onSearchPress: PropTypes.func,
  onSliderPress: PropTypes.func,
  noRightIcon: PropTypes.bool,
};
