// @flow

import { StyleSheet } from 'react-native';
// import styleguide from '../../styles/styleguide';

export default StyleSheet.create({
  containerTop: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  flex1: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10F3DA',
  },
  container1: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.8,
  },
  image: {
    width: 55,
    height: 55,
    marginLeft: 30,
    marginBottom: 30,
    marginTop: -70,
    alignSelf: 'flex-start',
  },
  main: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 25,
  },
  welcome: {
    color: 'white',
    fontSize: 24,
    marginBottom: 8,
    // fontFamily: styleguide.font.UbuntuMedium,
  },
  description: {
    color: 'white',
    fontSize: 30,
    // fontFamily: styleguide.font.UbuntuBold,
  },
  login: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    transform: [{ scale: 1 }],
  },
});
