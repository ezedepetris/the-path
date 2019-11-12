import React from 'react';
import { TextInput, View, Animated, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    subtitle: '205 Hobson st, Auckland, New Zealand',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    subtitle: 'Te Papa st, Wellingtong, New Zealand',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    subtitle: '60 Federal st, Auckland, New Zealand',
  },
];

const Destinations = (props) => (
 <View style={styles.container}>
    <Text style={styles.header} >Destinations</Text>
    <SwipeListView
      useFlatList
      data={DATA}
      renderItem={renderItem}
      renderHiddenItem={renderLeftItem}
      disableLeftSwipe
      leftOpenValue={70}
      style={styles.flatList}
      keyExtractor={item => item.id}
    />
  </View>
);

const renderItem = ({ item, index }) => (
  <View style={styles.itemContainer} >
    <TouchableOpacity style={styles.item} onPress={() => console.log("GO TO THIS DIRENCTION") } >
      <Text style={styles.title}>({index+1}) {item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  </View>
);

const renderLeftItem = (data, rowMap) => (
  <TouchableOpacity onPress={() => console.log("REMOVE!!!!!: ", data.item.id) } style={styles.iconContainer}>
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
