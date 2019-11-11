// @flow

import { StyleSheet } from 'react-native';
// import styleguide from '../../styles/styleguide';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#4EAFFD',
  },
  main: {
    marginHorizontal: 45,
    marginBottom: 60,
  },
  shareLocation: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    // fontFamily: styleguide.font.UbuntuMedium,
  },
  description: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    marginBottom: 30,
    lineHeight: 20,
    // fontFamily: styleguide.font.RobotoSlabRegular,
  },
  button: {
    alignSelf: 'center',
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
