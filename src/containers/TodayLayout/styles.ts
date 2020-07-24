import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  listContainer: {
    color: theme.seafoam,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center ',
    flexDirection:'column',
    backgroundColor: theme.backgroundColor,
    minHeight: '100vh',
    paddingLeft: '1rem',
    paddingBottom: '4rem',
    paddingRight: '1rem',
    borderRadius: '3px',
    boxSizing: 'border-box',
    // width: '30%',/
  },
  lists: {
    color: theme.seafoam,
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: theme.backgroundColor,
    // height: '100vh',
    marginLeft: '1rem',
    marginBottom: '1rem',
    marginRight: '1rem',
    borderRadius: '3px',
    width: '100%',
    minWidth: '15rem',
  },
  list: {
    listStyleType: 'none',
    width: '30%',
    '& ul': {
      margin: 0,
      padding: 0,
    }
  },
});
