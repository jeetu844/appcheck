import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {APP_LOG} from '../utils/helperFunctions';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const {userData, isIntroFinished, isSplash} = useSelector(
    (state: any) => state?.auth || {},
  );

  APP_LOG(userData, '<===userData');

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!!userData ? MainStack(Stack) : AuthStack(Stack, isIntroFinished)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
