import React from 'react';
import { TextInput, View, Animated, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    <FlatList
      style={styles.flatList}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
);



const renderItem = ({ item, index }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>({index+1}) {item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
}
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
