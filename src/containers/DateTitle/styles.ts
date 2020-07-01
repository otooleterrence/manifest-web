import { createStyles } from '@material-ui/styles';

export const styles = (theme: any) => createStyles({
  dateContainer: {
    width:'20rem',
    height:'20rem',
    display: 'flex',
    // backgroundColor:'red',
    justifyContent: 'middle',
    alignItems: 'center',
    // height: '2rem',
    color: theme.backgroundColor,
    fontSize: '3rem',
    // marginLeft: '1rem',
    // marginRight: '1rem',
    fontFamily: 'Playfair Display serif',
    '-webkit-text-stroke-width': `2px`,
    '-webkit-text-stroke-color': theme.seafoam,
  },
});
