import React from 'react';
import { TextInput, View, Animated, FlatList, Text, TouchableOpacity, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from '../../components/GradientButton';
import styles from './styles';

const Indications = ({indications}) => (
 <View style={styles.container}>
  <GradientButton
    text={'close'}
    // textStyle={textStyle}
    style={{ alignSelf:'flex-end', marginRight: 10, marginBottom: 5,top:0, paddingVertical: 5}}
    onPress={() => console.log("CLOSE MODAL")}
  />
 <View style={styles.flatListContainer}>
    <FlatList
      data={indications.steps}
      renderItem={renderItem}
      // ListHeaderComponent={() => renderHeader(indications)}
      style={styles.flatList}
      // contentContainerStyle={styles.flatListContainer}
      keyExtractor={(item, index) => index}
    />
  </View>
  </View>
);

const renderItem = ({item, index}) => (
  <View style={styles.item}>
    <View style={{ flexDirection: 'column'}}>
      <HTML style={styles.title} html={item.text} imagesMaxWidth={Dimensions.get('window').width} />
    </View>
  </View>
);

const renderHeader = ({endAddress, distance, duration}) => (
  <View style={styles.item}>
    <View style={{ flexDirection: 'column'}}>
      <Text style={styles.title}>{endAddress} {distance}</Text>
      <Text style={styles.subtitle}>{duration}</Text>
    </View>
  </View>
);

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
