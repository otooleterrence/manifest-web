import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface Task {
  text: string;
  done: boolean;
  cancelled: boolean;
}

interface ListState {
  tasks: Task[];
}

const initialState: ListState = {
  tasks: [],
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
      state.tasks.push(task);
    },
    finishTask: (state, action: PayloadAction<number>) => {
      state.tasks[action.payload].done = true;
    },
    cancelTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
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
export const selectTasks = (state: RootState) =>
  state.list.tasks;

export default toDoSlice.reducer;
