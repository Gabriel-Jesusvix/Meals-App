import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { s } from './styles';

interface MealsDetailsProps {
  duration: number
  complexity: string
  affordability: string
  style?: ViewStyle
  textStyle?: TextStyle
}
export function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealsDetailsProps) {
  return (
    <View style={[s.details, style]}>
      <Text style={[s.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[s.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[s.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}