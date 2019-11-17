import styleGuide from '../../assets/styles';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default {
  flatListContainer: {
    // position: 'absolute',
    height: (height*0.7),
    width: width,
    // bottom: 0,
    backgroundColor: styleGuide.color.white,
    alignItems: 'flex-start',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: styleGuide.color.sgiLightGrey,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3
  },
  // container: {
  //   position: 'absolute',
  //   height: (height*0.8),
  //   width: width,
  //   bottom: 0,
  //   backgroundColor: styleGuide.color.white,
  //   alignItems: 'flex-start',
  //   paddingTop: 5,
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   shadowColor: styleGuide.color.sgiLightGrey,
  //   shadowOffset: { width: 0, height: -5 },
  //   shadowOpacity: 0.4,
  //   shadowRadius: 5,
  //   elevation: 3
  // },
  container: {
   position: 'absolute',
   bottom: 0,
   // backgroundColor: styleGuide.color.white
   // height: (height*0.8),
   // width: width,
  },
  flatList: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    paddingTop: 5,
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
