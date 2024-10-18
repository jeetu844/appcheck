import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import {isIos} from '../utils/helperFunctions';

const HIT_SLOP_PROP = {
  top: 30,
  right: 30,
  left: 30,
  bottom: 30,
};

const BottomTabCustom = (props: any) => {
  const {state, descriptors, navigation} = props;
  const {drawerType} = useSelector((state: any) => state?.settings || {});
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.bottomTabContainer}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const tabIcon = options?.tabBarIcon;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={String(index)}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              hitSlop={HIT_SLOP_PROP}
              onLongPress={onLongPress}
              style={[
                styles.touchContainer,
                isFocused && index == 1 && styles.whiteCircle,
              ]}>
              {tabIcon && tabIcon(isFocused)}

              <Text
                style={{
                  ...commonStyles.mediumFont12,
                  color: isFocused ? colors.themeColor : colors.black,
                  marginTop: moderateScaleVertical(4),
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabCustom;

const styles = StyleSheet.create({
  bottomTabContainer: {
    ...commonStyles.elevationShadow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: isIos ? moderateScaleVertical(84) : moderateScaleVertical(84),
    backgroundColor: colors.grey1,
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  container: {
    backgroundColor: colors.white,
  },
  touchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(84),
    width: moderateScale(84),
  },
  whiteCircle: {
    borderRadius: moderateScale(45),
    backgroundColor: colors.white,
  },
});
