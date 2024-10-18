import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from '../styles/colors';
interface Props {
  headerStyle?: object;
  statusBarColor?: string;
  barStyle?: string | any;
  children?: object | any;
  isLoading?: boolean;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
}

const WrapperContainer: FC<Props> = props => {
  const {
    statusBarColor = colors.white,
    barStyle = 'light-content',
    children,
    isLoading = false,
    pointerEvents = 'auto',
  } = props;
  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: statusBarColor}}
      pointerEvents={pointerEvents}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default React.memo(WrapperContainer);
