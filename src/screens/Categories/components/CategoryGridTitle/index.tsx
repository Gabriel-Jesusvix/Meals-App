import {Text, View, Pressable, PressableProps } from "react-native";
import { s } from './styles'
import { useNavigation } from "@react-navigation/native";


type CategoryGridProps = PressableProps & {
  title: string
  color: string
  id: string
}
export function CategoryGridTitle({title, color,id, ...rest}: CategoryGridProps) {
 const { navigate } = useNavigation()

 function handleNavigateOverview(){
  navigate('MealsOverview', { id })
 }
  return (
    <View style={s.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          s.button,
          pressed ? s.buttonPressed : null,
        ]}
        {...rest}
        onPress={handleNavigateOverview}
      >
        <View style={[s.innerContainer, { backgroundColor: color }]}>
          <Text style={s.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}