import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import notesSlice from './slices/notes';
import eventsSlice from './slices/events';
import tasksSlice from './slices/tasks';
import themes from './slices/theme';

export const store = configureStore({
  reducer: {
    events: eventsSlice,
    notes: notesSlice,
    tasks: tasksSlice,
    themes: themes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
