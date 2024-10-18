import React from 'react';
import {StyleSheet} from 'react-native';
import {Login, Signup} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

export default function AuthStack(Stack: any, isIntroFinished: boolean) {
  return (
    <React.Fragment>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
