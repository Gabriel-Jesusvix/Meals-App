import { StatusBar, View } from 'react-native';
import { AppRoutes } from '../routes';
import { FavoriteContextProvider } from '../store/context/FavoriteContext';
import { Provider } from 'react-redux';
import { store } from '../store/redux/store';

export function Main() {
  return (
    <Provider
      store={store}
    >
      <FavoriteContextProvider>
        <StatusBar animated barStyle={'light-content'} showHideTransition={'fade'} translucent={false} />
        <AppRoutes />
      </FavoriteContextProvider>
    </Provider>
  );
}

