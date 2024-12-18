import {  StatusBar, View } from 'react-native';
import { AppRoutes } from '../routes';

export function Main() {
  return (
    <>
      <StatusBar animated barStyle={'dark-content'} showHideTransition={'fade'} translucent={false} />
      <AppRoutes />
    </>
  );
}

