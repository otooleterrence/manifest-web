import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import toDoList from './slices/toDoList';
import themes from './slices/theme';

export const store = configureStore({
  reducer: {
    list: toDoList,
    themes: themes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
