import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

/**
 * Interfaces and Initial State
 */
interface Theme {
  selectedTheme: string;
}

const initialState: Theme = {
  selectedTheme: 'PURPLE',
}

/**
 * Slice Setup
 */
export const themeSlice = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.selectedTheme = action.payload;
    },
  },
});

/**
 * Action Exports from this slice
 */
export const {
  setTheme,
} = themeSlice.actions;

/**
 * Selectors for this slice
 */
export const selectTheme = (state: RootState) =>
  state.themes.selectedTheme;

export default themeSlice.reducer;
