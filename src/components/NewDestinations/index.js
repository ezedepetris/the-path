import React from 'react';
import { TextInput, View, Animated, FlatList, Text, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from '../../components/GradientButton';
import styles from './styles';

const NewDestinations = ({addresses, addNewDestination, close}) => (
 <View style={styles.container}>
  <GradientButton
    text={'Done'}
    // colors={text === "FOLLOWING" ? ["#a8b6c8", "#a8b6c8"] : ""}
    // textStyle={textStyle}
    style={{ alignSelf:'flex-end', marginRight: 10, marginBottom: 5,top:0, paddingVertical: 5}}
    onPress={close}
  />
 <View style={styles.flatListContainer}>

    <FlatList
      data={addresses}
      renderItem={({ item, index }) => renderItem(item, index, addNewDestination)}
      style={styles.flatList}
      // contentContainerStyle={styles.flatListContainer}
      keyExtractor={item => item.placeId}
    />
  </View>
  </View>
);

const renderItem = (item, index, addNewDestination) => (
  <TouchableOpacity style={styles.item} onPress={() => addNewDestination(item)} >
    <GradientButton
      text={'+'}
      // colors={text === "FOLLOWING" ? ["#a8b6c8", "#a8b6c8"] : ""}
      // textStyle={textStyle}
      style={{ alignSelf: 'flex-end', marginBottom: 5, paddingVertical: 5}}
      // onPress={close}
    />
    <View style={{ flexDirection: 'column'}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>

  </TouchableOpacity>
    // <Icon
    //   name="trash"
    //   style={styles.icon}
    // />
);

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
