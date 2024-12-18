import { Image, Pressable, Text, View } from "react-native";
import { s } from "./styles";


interface MealItemProp {
  title: string
  imageUrl: string
  duration: number
  complexity: string
  affordability: string
  }

export function MealItem({title, imageUrl, duration, complexity, affordability}:MealItemProp) {
 
  return (
    <View style={s.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? s.buttonPressed : null)}
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