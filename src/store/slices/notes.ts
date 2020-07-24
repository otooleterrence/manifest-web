import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface Note {
  text: string;
  done: boolean;
  cancelled: boolean;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    {
      text: 'my first note',
      done: false,
      cancelled: false,
    },
    {
      text: 'my done task',
      done: true,
      cancelled: false,
    },
    {
      text: 'my cancelled task',
      done: false,
      cancelled: true,
    },
    {
      text: 'my cancelled task',
      done: false,
      cancelled: true,
    }
  ],
}

export const toDoSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const task = {
        text: action.payload,
        done: false,
        cancelled: false,
      }
      state.notes.push(task);
    },
    finishTask: (state, action: PayloadAction<number>) => {
      state.notes[action.payload].done = true;
    },
    cancelTask: (state, action: PayloadAction<number>) => {
      state.notes.splice(action.payload, 1);
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
} = toDoSlice.actions;

/**
 * Selectors for this slice
 */
export const selectNotes = (state: RootState) : Note[] =>
  state.notes.notes || [];

export default toDoSlice.reducer;
