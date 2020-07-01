import moment from 'moment';

export function getDate() {
  // const today = new Date();
  return moment().format('dddd | MMMM Do, YYYY');
}
