import { Text, View } from "react-native";
import { s } from "./styles";
import { useFavorite } from "../../store/context/hooks/useFavorite";
import { MEALS } from "../../mocks/dummy-data";
import { MealsList } from "./components/MealsList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux/store";


export function Favorite() {
  //Context
  const { ids } = useFavorite()
  //Redux
  const favoriteMealIds = useSelector((state:RootState) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.getId())
  );

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