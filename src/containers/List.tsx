import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTasks,
  addTask,
  finishTask,
  cancelTask,
} from '../store/slices/toDoList';

export default function List() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  return (
    <div>
      <ul>
        {tasks.map((task: any, index) => (
          <li>
            {task.done && '~~'}
            {task.text}
            {task.done && '~~'}
            <button
              onClick={() => {
                dispatch(finishTask(index));
              }}
            >Finish</button>
            <button
              onClick={() => {
                dispatch(cancelTask(index));
              }}
            >X</button>
          </li>
        ))}
      </ul>
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button
        onClick = {() => {
          dispatch(addTask(newTask));
          setNewTask('');
        }}
      >Add Task</button>
    </div>
  )
}
