import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  listContainer: {
    backgroundColor: theme.backgroundColor,
    height: '100%',
    marginLeft: '1rem',
    marginBottom: '1rem',
    marginRight: '1rem',
    borderRadius: '3px',
  },
  listItem: {
    display: 'flex',
    color: 'white',
    border: '1px solid none',
    // width: '100%',
    flexGrow: 1,
    '& :hover': {
      textDecoration: 'underline',
    },
    '& span': {
      flexGrow: 1,
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
    },
  },
  itemContainer: {
    display: 'flex',
    alignContent: 'center',
    height: '2rem',
    lineHeight: '2rem',
    marginLeft: '1rem',
    width: '100%',
  },
});
