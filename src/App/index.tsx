import {  StatusBar, View } from 'react-native';
import { AppRoutes } from '../routes';

export function Main() {
  return (
    <>
      <StatusBar animated barStyle={'light-content'} showHideTransition={'fade'} translucent={false} />
      <AppRoutes />
    </>
  );
}

