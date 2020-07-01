import React from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { getDate } from '../../utils/date';
import { setTheme } from '../../store/slices/theme';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function Footer(props: Props) {
  const dispatch = useDispatch();

  return (
    // <div className={props.classes.headerContainer}>
    //   <span>{getDate()} :: manifest</span>
    //   <select
    //     name="theme-name"
    //     onChange={e => dispatch(setTheme(e.target.value))}
    //   >
    //     <option value="NORMAL">normal</option>
    //     <option value="PINK">Pink</option>
    //     <option value="RED">Red</option>
    //     <option value="WHITE">White</option>
    //   </select>
    // </div>
    <footer className={props.classes.footer}>
      <h2>manifest</h2>
      <span>Est. 2020</span>
      <br />
    </footer>
  );
};

export default withStyles(styles)(Footer);
