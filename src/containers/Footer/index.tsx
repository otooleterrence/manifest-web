import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function Footer(props: Props) {
  return (
    <footer className={props.classes.footer}>
      <h2>manifest</h2>
      <span>Est. 2020</span>
      <br />
    </footer>
  );
};

export default withStyles(styles)(Footer);
