import { FlatList } from "react-native";
import { CATEGORIES } from "../../mocks/dummy-data";
import { RenderCategoryItem } from "./components/RenderCategoryItem";
import { useNavigation } from "@react-navigation/native";


export function Categories() {
  
  
  
  return (
    <FlatList
      style={{backgroundColor: '#FFFFFF'}}
      data={CATEGORIES}
      keyExtractor={( item )=> item.getId()}
      renderItem={({item}) =>
        RenderCategoryItem({id: item.getId(), color: item.getColor(),title: item.getTitle()})
      }
       showsVerticalScrollIndicator={false}
    />
  )
}