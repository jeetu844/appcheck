import React, {FC} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  title?: string;
  btnStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  loaderColor?: ColorValue;
  disabled?: boolean;
  btnTxtStyle?: StyleProp<TextStyle>;
  indicatorSize?: number;
  numberOfLines?: number | undefined;
}

const ButtonComp: FC<Props> = props => {
  const {
    onPress = () => {},
    title = '',
    btnStyle = {},
    isLoading = false,
    loaderColor = colors.white,
    disabled = false,
    btnTxtStyle = {},
    indicatorSize = 20,
    numberOfLines,
  } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.btnTouchContainer,
        ...(btnStyle as object),
      }}
      disabled={disabled || isLoading}
      onPress={onPress}
      activeOpacity={0.8}>
      {isLoading ? (
        <ActivityIndicator size={indicatorSize} color={loaderColor} />
      ) : (
        <Text
          numberOfLines={numberOfLines}
          style={{
            ...styles.title,
            ...(btnTxtStyle as object),
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnTouchContainer: {
    backgroundColor: colors.themeColor,
    minHeight: moderateScaleVertical(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(24),
    marginHorizontal: moderateScale(20),
  },
  title: {
    ...commonStyles.boldFont16,
    color: colors.white,
    textAlign: 'center',
  },
});

export default React.memo(ButtonComp);
