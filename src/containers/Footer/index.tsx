import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './styles';

interface Props {
  classes: any,
}

export function Footer(props: Props) {
  return (
    <footer className={props.classes.footer}>
      <br />
      <strong>manifest</strong>
      <span>Est. 2020</span>
      <br />
    </footer>
  );
};

export default withStyles(styles)(Footer);
