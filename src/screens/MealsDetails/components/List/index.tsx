import { View, Text } from 'react-native';
import { s } from './styles';

interface ListProps {
  data: string[]
}
export function List({ data }: ListProps) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={s.listItem}>
      <Text style={s.itemText}>{dataPoint}</Text>
    </View>
  ));
}