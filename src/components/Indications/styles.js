import styleGuide from '../../assets/styles';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default {
  flatListContainer: {
    height: (height*0.7),
    width: width,
    backgroundColor: styleGuide.color.white,
    alignItems: 'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: styleGuide.color.blackLightOpacity,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3
  },
  container: {
   position: 'absolute',
   bottom: 0,
  },
  flatList: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    width: width
  },
  item: {
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    fontSize: 16,
    color: styleGuide.color.silverChalice,
    backgroundColor: styleGuide.color.white
  },
  itemHeader: {
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    fontSize: 16,
    color: styleGuide.color.white,
  },
  header: {
    shadowColor: styleGuide.color.blackLightOpacity,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,

    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    // marginTop: 0,
    fontSize: 16,
    color: styleGuide.color.white,
    backgroundColor: "#42b002"
  },
  title: {
    fontSize: 18,
    color: styleGuide.color.dark
  },
  subtitle: {
    color: styleGuide.color.silverChalice
  },
  icon: {
    alignContent: 'flex-end',
    fontSize: 30,
    paddingHorizontal: 23,
    color: styleGuide.color.white
  },
};
