import { createSlice } from '@reduxjs/toolkit';

type FavoritesState = {
  ids: string[];
};
const initialState: FavoritesState = {
  ids: [],
};
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer;