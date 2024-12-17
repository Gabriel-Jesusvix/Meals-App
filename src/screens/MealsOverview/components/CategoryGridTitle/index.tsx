import {Text, View, Pressable } from "react-native";
import { s } from './styles'


interface CategoryGridProps {
  title: string
  color: string
}
export function CategoryGridTitle({title, color}: CategoryGridProps) {
  return (
    <View style={s.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          s.button,
          pressed ? s.buttonPressed : null,
        ]}
      >
        <View style={[s.innerContainer, { backgroundColor: color }]}>
          <Text style={s.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}