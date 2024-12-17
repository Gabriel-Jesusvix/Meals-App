import { FlatList } from "react-native";
import { CATEGORIES } from "../../mocks/dummy-data";
import { RenderCategoryItem } from "./components/RenderCategoryItem";


export function Categories() {
  return (
    <FlatList 
      data={CATEGORIES}
      keyExtractor={( item )=> item.getId()}
      renderItem={({item}) =>
        RenderCategoryItem({id: item.getId(), color: item.getColor(),title: item.getTitle()})
      }
    />
  )
}