import React from 'react';
import {StyleSheet} from 'react-native';
import {Home} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import BottomTabs from './BottomTabs';

export default function MainStack(Stack: any) {
  return (
    <React.Fragment>
      <Stack.Screen
        name={navigationStrings.BOTTOM_TABS}
        component={BottomTabs}
      />

      {/* other screens */}

      {/* <Stack.Screen name={navigationStrings.HOME} component={Home} /> */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
