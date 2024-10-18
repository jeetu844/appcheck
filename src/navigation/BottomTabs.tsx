import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet} from 'react-native';
import BottomTabCustom from '../Components/BottomTabCustom';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import {Home} from '../Screens';
import {moderateScale} from '../styles/responsiveSize';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      backBehavior="initialRoute"
      initialRouteName={navigationStrings.HOME}
      tabBar={props => <BottomTabCustom {...props} />}>
      <Tab.Screen
        name={navigationStrings.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarLabel: t('HOME'),
          tabBarIcon: focused => (
            <Image
              source={focused ? imagePath.home_active : imagePath.home}
              style={!focused && styles.tabIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    alignSelf: 'center',
    height: moderateScale(24),
    width: moderateScale(24),
  },
});
