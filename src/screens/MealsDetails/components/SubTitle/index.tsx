import { View, Text } from 'react-native';
import { s } from './styles';

interface SubTitleProps {
  children: React.ReactNode
}
export function SubTitle({ children }: SubTitleProps) {
  
  return (
    <View style={s.subtitleContainer}>
      <Text style={s.subtitle}>{children}</Text>
    </View>
  );
}