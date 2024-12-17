import { SafeAreaView, StatusBar } from 'react-native';
import { s } from './styles';
import { Categories } from '../screens/Categories';

export function Main() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#24180f"}}>
      <StatusBar animated barStyle={'light-content'} showHideTransition={'fade'} translucent={false} />
      <Categories />
    </SafeAreaView>
  );
}

