import styleGuide from '../../assets/styles';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default {
  container: {
    position: 'absolute',
    height: (height*0.3),
    width: width,
    bottom: 0,
    backgroundColor: styleGuide.color.white,
    alignItems: 'flex-start',
    // paddingHorizontal: 15,
    paddingTop: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: styleGuide.color.sgiLightGrey,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F3F6FF',
  },
  header: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 5
  },
  flatList: {
    flex: 1,
    paddingTop: 5,
    width: width
  },
  item: {
    paddingHorizontal: 15,
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: styleGuide.color.silverChalice,
    backgroundColor: styleGuide.color.white,
  },
  title: {
    fontSize: 18,
    color: styleGuide.color.dark,
  },
  subtitle: {
    color: styleGuide.color.silverChalice,
  },
};
