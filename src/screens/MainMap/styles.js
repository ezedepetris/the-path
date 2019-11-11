
import styleGuide from '../../assets/styles';

export default {
  topBar: {
    flex: 1,
    backgroundColor: styleGuide.color.white,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  container: {
    flex: 1,
    backgroundColor: styleGuide.color.commonBackground,
  },
  searchInputStyle: {
    color: '#313131',
    fontFamily: styleGuide.font.UbuntuMedium,
  },
  route: {
    backgroundColor: 'white',
    shadowColor: '#ddd',
    zIndex: 10000,
    shadowOffset: { width: 3, height: 5, borderRadius: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
  },
};
