import { createContext, ReactNode, useState } from "react";

type FavoriteContextProviderProps = {
  children: ReactNode
}


type FavoriteDataProps = {
  ids: string[],
  addFavorite: (id: string) => void,
  removeFavorite: (id: string) => void
 
}
export const FavoriteContext = createContext({} as FavoriteDataProps )

export function FavoriteContextProvider({children}:FavoriteContextProviderProps) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState<string[]>([])

  function addFavorite(id: string) {
    setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id])
  }
  
  function removeFavorite(id: string) {
    setFavoriteMealsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
  }

  return (
    <FavoriteContext.Provider
      value={{
        ids: favoriteMealsIds,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}