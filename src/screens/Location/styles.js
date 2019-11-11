
import { StyleSheet } from 'react-native';
// import styleguide from '../../styles/styleguide';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  main: {
    marginHorizontal: 45,
    marginBottom: 60,
  },
  shareLocation: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
    // fontFamily: styleguide.font.UbuntuMedium,
  },
  description: {
    textAlign: 'center',
    color: 'black',
    fontSize: 13,
    marginBottom: 30,
    lineHeight: 20,
    // fontFamily: styleguide.font.RobotoSlabRegular,
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 3,
  },
});
