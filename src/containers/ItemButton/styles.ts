import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  buttons: {
    borderRadius: '3px',
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#ffffff40',
    },
    '&:active': {
      backgroundColor: theme.medPurp,
    }
  },
});
