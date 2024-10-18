import React, {FC} from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Image,
  ImageStyle,
  ImageURISource,
  KeyboardTypeOptions,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import {isIos} from '../utils/helperFunctions';
import ImageButton from './ImageButton';

interface Props {
  mainContainerStyle?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  placeHolderColor?: ColorValue;
  placeHolder?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  value?: string;
  secureTextEntry?: boolean;
  autoFocus?: boolean;
  textInputStyle?: StyleProp<TextStyle>;
  isRightIcon?: boolean;
  rightIcon?: ImageURISource;
  onPressRightIcon?: (event: GestureResponderEvent) => void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  txtInputContainer?: StyleProp<ViewStyle>;
  isLabel?: boolean;

  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  isBottomLabel?: boolean;
  bottomLabel?: string;
  bottomLabelStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  returnKeyType?: ReturnKeyTypeOptions | undefined;

  isLabelInfo?: boolean;
  blurOnSubmit?: boolean | undefined;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  inputRef?: any;
  isCustomRight?: boolean;
  CustomRight?: FC;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  rightIconStyle?: StyleProp<ImageStyle>;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

const TextInputWithLabel: FC<Props> = props => {
  const {
    mainContainerStyle = {},
    onChangeText = () => {},
    placeHolderColor = colors.grey,
    placeHolder = '',
    maxLength = undefined,
    keyboardType = 'default',
    multiline = false,
    value = '',
    secureTextEntry = false,
    autoFocus = false,
    textInputStyle = {},
    isRightIcon = false,
    rightIcon = imagePath.back_top,
    onPressRightIcon = () => {},
    label = '',
    labelStyle = {},
    txtInputContainer = {},
    isLabel = true,

    textAlignVertical = 'center',
    isBottomLabel = false,
    bottomLabel = '',
    bottomLabelStyle = {},
    editable = true,
    returnKeyType = undefined,

    isLabelInfo = false,
    blurOnSubmit = true,
    onSubmitEditing = () => {},
    inputRef = null,
    isCustomRight = false,
    CustomRight = () => null,
    onLayout = () => {},
    rightIconStyle = {},
    onFocus = () => {},
  } = props;

  return (
    <View
      style={{
        ...styles.mainContainer,
        ...(mainContainerStyle as object),
      }}>
      {isLabel && (
        <View style={styles.labelView}>
          <Text style={{...styles.label, ...(labelStyle as object)}}>
            {label}
          </Text>
          {isLabelInfo && <ImageButton imgSrc={imagePath.back_top} />}
        </View>
      )}
      <View
        style={{...styles.txtInputContainer, ...(txtInputContainer as object)}}>
        <TextInput
          ref={inputRef}
          autoFocus={autoFocus}
          value={value}
          onChangeText={textIn => {
            const trimmedText = textIn.replace(/^\s+/g, '');
            const text = trimmedText.replace(/\s+/g, ' ');
            onChangeText(text);
          }}
          style={[
            styles.txtInputStyle,
            textInputStyle as object,
            value.length == 0 && commonStyles.font14,
          ]}
          placeholder={placeHolder}
          placeholderTextColor={placeHolderColor}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          textAlignVertical={textAlignVertical}
          editable={editable}
          returnKeyType={returnKeyType}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={onSubmitEditing}
          onLayout={onLayout}
          onFocus={onFocus}
        />
        {isRightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image style={rightIconStyle} source={rightIcon} />
          </TouchableOpacity>
        )}
        {isCustomRight && (
          <View>
            <CustomRight />
          </View>
        )}
      </View>
      {isBottomLabel && bottomLabel !== '' && (
        <Text style={{...styles.bottomLabel, ...(bottomLabelStyle as object)}}>
          {bottomLabel}
        </Text>
      )}
    </View>
  );
};

export default React.memo(TextInputWithLabel);

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: moderateScale(20),
  },
  label: {
    ...commonStyles.font12,
    marginRight: moderateScale(4),
    color: colors.themeColor,
  },
  txtInputContainer: {
    ...commonStyles.flexRowSpaceBtwn,
    // borderRadius: moderateScale(8),
    // paddingHorizontal: moderateScale(12),
  },

  txtInputStyle: {
    ...commonStyles.mediumFont16,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    paddingVertical: isIos
      ? moderateScaleVertical(10)
      : moderateScaleVertical(6),
  },
  downArw: {
    marginHorizontal: moderateScale(6),
  },

  bottomLabel: {
    ...commonStyles.mediumFont10,
    marginTop: moderateScaleVertical(4),
    color: colors.red,
    marginLeft: moderateScale(4),
  },
  labelView: {
    ...commonStyles.flexRowCenter,
    // marginBottom: moderateScaleVertical(6),
  },
});
