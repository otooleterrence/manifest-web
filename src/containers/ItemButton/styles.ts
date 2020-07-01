import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  buttons: {
    borderRadius: '3px',
    // color: `${theme.secondaryText} !important`,
    // color: `white !important`,
    // color: `white`,
    background: 'transparent',
    border: 'none',
    color: theme.secondaryText,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#ffffff40',
      // opacity: '40%',
    },
    '&:active': {
      backgroundColor: theme.medPurp,
      // opacity: '40%',
    }
  },
  // listContainer: {
  //   backgroundColor: theme.backgroundColor,
  //   height: '100%',
  //   marginLeft: '1rem',
  //   marginBottom: '1rem',
  //   marginRight: '1rem',
  //   borderRadius: '3px',
  // },
  // listItem: {
  //   display: 'flex',
  //   color: 'white',
  //   border: '1px solid none',
  //   // width: '100%',
  //   flexGrow: 1,
  //   '& :hover': {
  //     // textDecoration: 'underline',
  //     borderBottom: '1px solid lightpink',
  //   },
  //   '& span': {
  //     flexGrow: 1,
  //     marginLeft: '0.5rem',
  //     marginRight: '0.5rem',
  //   },
  // },
  // itemContainer: {
  //   display: 'flex',
  //   alignContent: 'center',
  //   height: '2rem',
  //   lineHeight: '2rem',
  //   marginLeft: '1rem',
  //   width: '100%',
  // },
});
