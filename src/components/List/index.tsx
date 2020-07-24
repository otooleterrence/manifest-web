import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
// import {
//   selectTasks,
//   addTask,
//   Task,
// } from '../../store/slices/notes';
import TaskItem from '../TaskItem';
import { styles } from './styles';

interface Props {
  classes: {
    [propName: string]: string;
  },
  name: string,
  bullets?: any[],
}

export function List(props: Props) {
  const { classes, name, bullets = [] } = props;
  // const dispatch = useDispatch();
  // const [newTask, setNewTask] = useState('');
  return (
    <div className={classes.list}>
      <h2>{name}</h2>
      <ul>
        {bullets.map((task: any, index) => (
          <TaskItem text={task.text} done={task.done} id={index} key={`item-${index}`} />
        ))}
      </ul>
    </div>

  )
}

export default withStyles(styles)(List);
