import React, {FC} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  Image,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import ImageButton from './ImageButton';

interface Props {
  leftImg?: ImageURISource;
  centerImg?: ImageURISource;
  rightImg?: ImageURISource;
  onPressLeftImg?: (event: GestureResponderEvent) => void;
  onPressCenterImg?: (event: GestureResponderEvent) => void;
  onPressRightImg?: (event: GestureResponderEvent) => void;
  isLeftTitle?: boolean;
  leftTitle?: string;
  isRight?: boolean;
  isCenterTitle?: boolean;
  centerTitle?: string;
  isRightIcon?: boolean;
  mainContainer?: StyleProp<ViewStyle>;
  leftContainer?: StyleProp<ViewStyle>;
  leftTitleStyle?: StyleProp<TextStyle>;
  isLeftImg?: boolean;
  isLeftTitleImg?: boolean;
  rightImg1?: ImageURISource;
  tintColor?: ColorValue;
  rightImg1BtnDisabled?: boolean;
  leftImgBtnDisabled?: boolean;
  rightImg1Loading?: boolean;
  rightImg1TintColor?: ColorValue;
  isLoadingRight?: boolean;
  loaderColor?: ColorValue;
}

const Header: FC<Props> = props => {
  const {
    leftImg = imagePath.back_arrow,
    centerImg = imagePath.back_top,
    rightImg = imagePath.back_top,
    onPressLeftImg = () => {},
    onPressCenterImg = () => {},
    onPressRightImg = () => {},
    isLeftTitle = false,
    leftTitle = '',
    isRight = false,
    isCenterTitle = false,
    centerTitle = '',
    isRightIcon = true,
    mainContainer = {},
    leftContainer = {},
    leftTitleStyle = {},
    isLeftImg = true,
    isLeftTitleImg = true,
    rightImg1 = imagePath.back_top,
    tintColor = undefined,
    rightImg1BtnDisabled = false,
    leftImgBtnDisabled = false,
    rightImg1Loading = false,
    rightImg1TintColor = undefined,
    isLoadingRight = false,
    loaderColor = colors.themeColor,
  } = props;
  return (
    <View style={{...styles.mainCont, ...(mainContainer as object)}}>
      {isLeftTitle ? (
        <View style={{...styles.container, ...(leftContainer as object)}}>
          <View style={styles.leftTitleContainer}>
            {isLeftTitleImg && (
              <ImageButton
                disabled={leftImgBtnDisabled}
                imgSrc={leftImg}
                hitSlop={hitSlopProp}
                onPress={onPressLeftImg}
                tintColor={tintColor}
              />
            )}
            <Text style={{...styles.leftTitle, ...(leftTitleStyle as object)}}>
              {leftTitle}
            </Text>
          </View>
          {isRight && (
            <View>
              {isLoadingRight ? (
                <ActivityIndicator color={loaderColor} size={'small'} />
              ) : (
                <ImageButton
                  disabled={rightImg1BtnDisabled || rightImg1Loading}
                  onPress={onPressRightImg}
                  imgSrc={rightImg1}
                  hitSlop={hitSlopProp}
                  tintColor={rightImg1TintColor}
                />
              )}
            </View>
          )}
        </View>
      ) : (
        <View style={styles.container}>
          {isLeftImg ? (
            <ImageButton
              imgSrc={leftImg}
              hitSlop={hitSlopProp}
              onPress={onPressLeftImg}
            />
          ) : (
            <View />
          )}
          {isCenterTitle ? (
            <Text style={styles.centerTitle}>{centerTitle}</Text>
          ) : (
            <ImageButton imgSrc={centerImg} onPress={onPressCenterImg} />
          )}
          {isRightIcon ? (
            <TouchableOpacity
              activeOpacity={0.8}
              hitSlop={hitSlopProp}
              onPress={onPressRightImg}>
              <Image source={rightImg} />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      )}
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRowJustifySpaceBtwn,
    alignItems: 'center',
    // height: moderateScaleVertical(66),
    borderBottomRightRadius: moderateScale(30),
    borderBottomLeftRadius: moderateScale(30),
    paddingHorizontal: moderateScale(16),
  },
  leftTitleContainer: {
    ...commonStyles.flexRowCenter,
  },
  leftTitle: {
    ...commonStyles.mediumFont20,
    color: colors.themeColor,
    marginLeft: moderateScale(12),
  },
  centerTitle: {
    ...commonStyles.boldFont18,
    color: colors.white,
  },
  cartCountView: {
    backgroundColor: colors.themeColor,
    height: moderateScale(16),
    width: moderateScale(16),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -4,
    top: -4,
    zIndex: 1,
  },
  cartCountText: {
    ...commonStyles.font10,
    fontSize: textScale(8),
    color: colors.white,
  },
  mainCont: {
    marginVertical: moderateScaleVertical(12),
  },
});
