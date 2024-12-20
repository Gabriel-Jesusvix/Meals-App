import { Text, View } from "react-native";
import { s } from "./styles";
import { useFavorite } from "../../store/context/hooks/useFavorite";
import { MEALS } from "../../mocks/dummy-data";
import { MealsList } from "./components/MealsList";


export function Favorite() {
  const { ids } = useFavorite()
  const favoriteMeals = MEALS.filter((meal) =>
    ids.includes(meal.getId())
  );
  console.log("favoriteMeals",favoriteMeals)

  if (favoriteMeals.length === 0) {
    return (
      <View style={s.rootContainer}>
        <Text style={s.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <MealsList items={favoriteMeals} />
  )

}