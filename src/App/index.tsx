import {  StatusBar, View } from 'react-native';
import { AppRoutes } from '../routes';
import { FavoriteContextProvider } from '../store/context/FavoriteContext';

export function Main() {
  return (
    <FavoriteContextProvider>
      <StatusBar animated barStyle={'light-content'} showHideTransition={'fade'} translucent={false} />
      <AppRoutes />
    </FavoriteContextProvider>
  );
}

