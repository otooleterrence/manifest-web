import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
// import {
//   selectTasks,
//   addTask,
// } from '../../store/slices/tasks';
// import {
//   selectEvents,
//   // addEvent,
// } from '../../store/slices/events';
// import {
//   selectNotes,
//   // addNote,
// } from '../../store/slices/notes';
// import List from '../../components/List';
import { styles } from './styles';

interface Props {
  classes: {
    [propName: string]: string;
  },
}

export function TodayLayout(props: Props) {
  const { classes } = props;
  // const tasks = useSelector(selectTasks);
  // const events = useSelector(selectEvents);
  // const dispatch = useDispatch();
  // const [newTask, setNewTask] = useState('');
  return (
    <div className={classes.noteTakerContainer}>
      {/* <div className={classes.lists}> */}
      <div className={classes.headerContainer}>
        <span className={classes.header}> Today's Notes</span>
      </div>
      <div className={classes.notesContainer}>
        <p><i>enter a new note here...</i></p>
      </div>
    </div>
  )
}

export default withStyles(styles)(TodayLayout);
