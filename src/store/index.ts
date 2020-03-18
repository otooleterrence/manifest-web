import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import toDoList from './slices/toDoList';

export const store = configureStore({
  reducer: {
    list: toDoList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
