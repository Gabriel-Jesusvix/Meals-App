import { useContext } from 'react'

import { FavoriteContext } from '../FavoriteContext';

export function useFavorite() {
  const context = useContext(FavoriteContext)

  return context
}