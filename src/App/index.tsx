import { SafeAreaView, StatusBar } from 'react-native';
import { s } from './styles';
import { Categories } from '../screens/Categories';

export function Main() {
  return (
    <SafeAreaView>
      <StatusBar animated barStyle={'dark-content'} translucent showHideTransition={'fade'}/>
      <Categories />
    </SafeAreaView>
  );
}

