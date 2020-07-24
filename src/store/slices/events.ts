import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface Event {
  text: string;
  done: boolean;
  cancelled: boolean;
}

interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [
    {
      text: 'my first event',
      done: false,
      cancelled: false,
    },
    {
      text: 'my done event',
      done: true,
      cancelled: false,
    },
  ],
}

export const events = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const task = {
        text: action.payload,
        done: false,
        cancelled: false,
      }
      state.events.push(task);
    },
    finishTask: (state, action: PayloadAction<number>) => {
      state.events[action.payload].done = true;
    },
    cancelTask: (state, action: PayloadAction<number>) => {
      state.events.splice(action.payload, 1);
    },
  },
});

/**
 * Action Exports from this slice
 */
export const {
  addTask,
  finishTask,
  cancelTask,
} = events.actions;

/**
 * Selectors for this slice
 */
export const selectEvents = (state: RootState) : Event[] =>
  state.events.events || [];

export default events.reducer;
