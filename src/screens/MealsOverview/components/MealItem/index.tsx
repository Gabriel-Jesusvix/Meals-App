import { Image, Pressable, Text, View } from "react-native";
import { s } from "./styles";
import { useNavigation } from "@react-navigation/native";


interface MealItemProp {
  id: string
  title: string
  imageUrl: string
  duration: number
  complexity: string
  affordability: string
  }

export function MealItem({id, title, imageUrl, duration, complexity, affordability }:MealItemProp) {
  const { navigate } = useNavigation()

  function handleNavigateDetailsMeals() {
    navigate('MealsDetails', { 
      id
    })
  }
 
  return (
    <View style={s.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? s.buttonPressed : null)}
        onPress={handleNavigateDetailsMeals}
      >
        <View style={s.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={s.image} />
            <Text style={s.title}>{title}</Text>
          </View>
          <View style={s.details}>
            <Text style={s.detailItem}>{duration}m</Text>
            <Text style={s.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={s.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}