import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  noteTakerContainer: {
    color: theme.seafoam,
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'flex-start ',
    flexDirection:'column',
    backgroundColor: theme.backgroundColor,
    // minHeight: '100vh',
    paddingTop: '1rem',
    paddingLeft: '1rem',
    paddingBottom: '4rem',
    paddingRight: '1rem',
    borderRadius: '3px',
    boxSizing: 'border-box',
    height:  '50vh',
    // width: '30%',/
  },
  notesContainer: {
    margin: '0rem 5rem',
    display: 'flex',
    flexGrow: 1,
    "& p": {
      height: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 400,
    },
  },
  headerContainer: {
    width: '100%',
  },
  header: {
    fontSize: '3rem',
    fontWeight: 800,
  },
  lists: {
    color: theme.seafoam,
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
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
