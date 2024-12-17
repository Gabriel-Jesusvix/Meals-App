import {Text, View, Pressable, PressableProps } from "react-native";
import { s } from './styles'


type CategoryGridProps = PressableProps & {
  title: string
  color: string
}
export function CategoryGridTitle({title, color, ...rest}: CategoryGridProps) {
  return (
    <View style={s.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          s.button,
          pressed ? s.buttonPressed : null,
        ]}
        {...rest}
      >
        <View style={[s.innerContainer, { backgroundColor: color }]}>
          <Text style={s.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}