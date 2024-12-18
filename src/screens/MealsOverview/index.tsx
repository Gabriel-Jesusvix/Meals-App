import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

type RouteParamProps = {
  id: string;
}

export function MealsOverview() {
  const route = useRoute();
  const { id } = route.params as RouteParamProps;

  return (
    <View>
      <Text>Meals Overview Screen: ${id}</Text>
    </View>
  )
}