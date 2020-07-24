import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface Task {
  text: string;
  done: boolean;
  cancelled: boolean;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      text: 'my first task',
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
export const selectTasks = (state: RootState) : Task[] =>
  state.tasks.tasks || [];

export default toDoSlice.reducer;
