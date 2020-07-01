import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor,
    height: '100vh',
    marginLeft: '1rem',
    marginBottom: '1rem',
    marginRight: '1rem',
    borderRadius: '3px',
    width: '30%',
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
});
