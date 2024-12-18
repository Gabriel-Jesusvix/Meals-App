import { SafeAreaView, StatusBar, View } from 'react-native';
import { AppRoutes } from '../routes';

export function Main() {
  return (
    <>
      <StatusBar animated barStyle={'dark-content'} showHideTransition={'fade'} translucent={false} />
      <SafeAreaView style={{ flex: 1 }}>
        <AppRoutes />
      </SafeAreaView>
    </>
  );
}

