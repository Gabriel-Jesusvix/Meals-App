import { CategoryProps } from "../../../../mocks/models/category";
import { CategoryGridTitle } from "../CategoryGridTitle";

export function RenderCategoryItem(props: CategoryProps) {
  return (
    <CategoryGridTitle 
      title={props.title}
      color={props.color}
      id={props.id}
    />
  )
}