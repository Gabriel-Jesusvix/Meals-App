import { Image, ScrollView, Text, View } from "react-native"
import { s } from "./styles";
import { List } from "./components/List";
import { SubTitle } from "./components/SubTitle";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../../mocks/dummy-data";
import { MealDetails } from "./components/MealsDetails";
import { useLayoutEffect } from "react";
import { FavoriteButton } from "./components/FavoriteButton";
import { useFavorite } from "../../store/context/hooks/useFavorite";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite ,removeFavorite } from  '../../store/redux/favorite'
import { RootState } from "../../store/redux/store";
type RouteParamProps = {
  id: string;
}

export function MealsDetails() {
  const route = useRoute();
  const { id } = route.params as RouteParamProps;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  const favoriteMealsIds = useSelector((state:RootState) => state.favoriteMeals.ids)
  const dispatch = useDispatch()
  // const { ids, removeFavorite, addFavorite } = useFavorite()
  const mealIsFavorite = favoriteMealsIds.includes(id);
  const navigation = useNavigation()

  function changeFavoritesStatusHandler() {
    if(mealIsFavorite) {
      //Context
      // removeFavorite(id)
      //Redux
      dispatch(removeFavorite({id}))
    } else {
      //context
      // addFavorite({id})

      //Redux
      dispatch(addFavorite({id}))
    }
  }


  useLayoutEffect(() => {
    const categoryTitle = MEALS.find(
      (meal) => meal.getId() === id
    )?.getTitle();

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View
            style={{ marginRight: 8 }}
          >
            <FavoriteButton
              //@ts-ignore
              icon={mealIsFavorite ? 'favorite' : 'favorite-outline'}
              color="#e2b497"
              onPress={changeFavoritesStatusHandler}
            />
          </View>
        );
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

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