import { Image, ScrollView, Text, View } from "react-native"
import { s } from "./styles";
import { List } from "./components/List";
import { SubTitle } from "./components/SubTitle";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../../mocks/dummy-data";
import { MealDetails } from "./components/MealsDetails";
import { useLayoutEffect } from "react";

type RouteParamProps = {
  id: string;
}

export function MealsDetails() {
  const route = useRoute();
  const { id } = route.params as RouteParamProps;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  const navigation = useNavigation()

  useLayoutEffect(() => {
      const categoryTitle = MEALS.find(
        (meal) => meal.getId() === id
      )?.getTitle();
  
      navigation.setOptions({
        title: categoryTitle,
      });
    }, [id, navigation]);

  return (
    <ScrollView 
      style={s.rootContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image style={s.image} source={{ uri: selectedMeal!.imageUrl }} />
      <Text style={s.title}>{selectedMeal!.title}</Text>
      <MealDetails
        duration={selectedMeal!.duration}
        complexity={selectedMeal!.complexity}
        affordability={selectedMeal!.affordability}
        textStyle={s.detailText}
      />
      <View style={s.listOuterContainer}>
        <View style={s.listContainer}>
          <SubTitle>Ingredientes - Ingredients </SubTitle>
          <List data={selectedMeal!.ingredients} />
          <SubTitle>Passos - Steps</SubTitle>
          <List data={selectedMeal!.steps} />
        </View>
      </View>
    </ScrollView>
  );
}