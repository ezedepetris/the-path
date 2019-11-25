import styleGuide from '../../assets/styles';

export default {
  view: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    zIndex:9999,
    backgroundColor: styleGuide.color.white,
    alignItems: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    shadowColor: styleGuide.color.blackLightOpacity,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F3F6FF',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: styleGuide.color.silverChalice,
    backgroundColor: styleGuide.color.white,
  },
  icon: {
    fontSize: 18,
    color: styleGuide.color.silverChalice,
    opacity: 0.7,
  },
};
