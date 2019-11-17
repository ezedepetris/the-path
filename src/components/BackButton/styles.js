import styleGuide from '../../assets/styles';

export default {
  view: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    // left: 30,
    zIndex:9999,
    backgroundColor: styleGuide.color.white,
    alignItems: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
    shadowColor: styleGuide.color.sgiLightGrey,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F3F6FF',
  },
  icon: {
    fontSize: 36,
    color: styleGuide.color.silverChalice,
    opacity: 0.7,
  },
};
