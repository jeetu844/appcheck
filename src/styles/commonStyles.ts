import colors from './colors';
import fontFamily from './fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from './responsiveSize';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};

export default {
  alignJustifyCenter: {
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  flexRowCenter: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
  },
  flexRowSpaceBtwn: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    justifyContent: 'space-between' as 'space-between',
  },
  flex1AlignJustifyCenter: {
    flex: 1,
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  flexRowJustifySpaceBtwn: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
  },
  itemSeparator: {
    height: moderateScaleVertical(16),
  },
  footerComp: {
    height: moderateScaleVertical(12),
  },
  footerComp2: {
    height: moderateScaleVertical(88),
  },
  absolute: {
    position: 'absolute' as 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  elevationShadow: {
    shadowColor: colors.black,
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  columnWrapper: {
    justifyContent: 'space-around' as 'space-around',
  },

  greyView: {
    backgroundColor: colors.vistaWhite,
    borderRadius: moderateScale(24),
    padding: moderateScale(20),
  },
  font10: {
    fontSize: textScale(10),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont10: {
    fontSize: textScale(10),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },
  boldFont10: {
    fontSize: textScale(10),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
  font11: {
    fontSize: textScale(11),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont11: {
    fontSize: textScale(11),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont11: {
    fontSize: textScale(11),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
  font12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },

  font13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },

  font14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
  font15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
  font16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
  font17: {
    fontSize: textScale(17),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont17: {
    fontSize: textScale(17),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont17: {
    fontSize: textScale(17),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },

  font18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },
  semiBoldFont18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.poppinsSemiBold,
  },
  boldFont18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },

  font19: {
    fontSize: textScale(19),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont19: {
    fontSize: textScale(19),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont19: {
    fontSize: textScale(19),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },

  font20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
  font24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
  font28: {
    fontSize: textScale(28),
    color: colors.black,
    fontFamily: fontFamily.poppinsRegular,
  },
  mediumFont28: {
    fontSize: textScale(28),
    color: colors.black,
    fontFamily: fontFamily.poppinsMedium,
  },

  boldFont28: {
    fontSize: textScale(28),
    color: colors.black,
    fontFamily: fontFamily.poppinsBold,
  },
};
