import { FlatList } from "react-native";
import { CATEGORIES } from "../../mocks/dummy-data";
import { RenderCategoryItem } from "./components/RenderCategoryItem";


export function Categories() {
  return (
    <FlatList
      style={{backgroundColor: '#3f2f25'}}
      data={CATEGORIES}
      keyExtractor={( item )=> item.getId()}
      renderItem={({item}) =>
        RenderCategoryItem({id: item.getId(), color: item.getColor(),title: item.getTitle()})
      }
       showsVerticalScrollIndicator={false}
    />
  )
}