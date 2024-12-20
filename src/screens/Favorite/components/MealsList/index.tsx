import { View, FlatList } from 'react-native';
import { MealItem} from '../../../MealsOverview/components/MealItem';
import { s } from './styles';


type MealsFavoriteProps = {
  id: string;
  title: string;
  affordability: string;
  complexity: string;
  duration: number;
  imageUrl: string;
  ingredients: string[];
  steps: string[];
  categoryIds: string[];
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
};

type MealsListProps = {
  items: MealsFavoriteProps[]; 
};

export function MealsList({ items }: MealsListProps) {
  function renderMealItem({ item }: { item: MealsFavoriteProps }) {
    const { id, title, imageUrl, affordability, complexity, duration } = item;

    const mealItemProps = {
      id,
      title,
      imageUrl,
      affordability,
      complexity,
      duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={s.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}