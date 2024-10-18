import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import colors from './src/styles/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';
import Toast from 'react-native-toast-message';
import {isIos} from './src/utils/helperFunctions';
import {toastConfig} from './src/utils/toastConfig';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
      <Toast position="top" topOffset={isIos ? 46 : 20} config={toastConfig} />
    </Provider>
  );
}

const styles = StyleSheet.create({});
