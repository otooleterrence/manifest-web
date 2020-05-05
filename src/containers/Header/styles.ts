import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '2rem',
    color: theme.backgroundColor,
    marginLeft: '1rem',
    marginRight: '1rem',
  },
});
