import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../../mocks/dummy-data";
import { MealItem } from "./components/MealItem";
import { s } from "./styles";
import { useLayoutEffect } from "react";


type Meal = {
  item: Partial<{
    title: string;
    imageUrl: string;
    duration: number;
    affordability: string
    complexity: string
    id: string;
    // categoryIds: string[];
    
    // ingredients: string[];
    // steps: string[];
    // isGlutenFree: boolean;
    // isVegan: boolean;
    // isVegetarian: boolean;
    // isLactoseFree: boolean;
  }>;
}


type RouteParamProps = {
  id: string;
}

export function MealsOverview() {
  const route = useRoute();
  const { id } = route.params as RouteParamProps;
  const navigation = useNavigation()

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.getCategoryIds().indexOf(id) >= 0;
  });

  function renderMealItem({item} : Meal) {
    const { title, imageUrl,affordability, complexity, duration } = item

    const mealItemProps = {
      title: title!,
      imageUrl: imageUrl!,
      affordability: affordability!,
      complexity: complexity!,
      duration: duration!,
    };
    return (
      <MealItem {...mealItemProps} />
    );
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.getId() === id
    )?.getTitle();

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  return (
    <View style={s.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}