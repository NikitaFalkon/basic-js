import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let springDate = new Date(date);
  let month;

  if(!date) {
      return "Unable to determine the time of year!";
  }
  if(!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  try {
    month = date.getMonth();
    date.setMonth(month);
  } catch(e) {
    throw new Error('Invalid date!');
  }

  switch (month) {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
  }
  // return (11 === month || month < 2) ? "winter" : (5 > month ) ? "spring" : (8 > month) ? "summer" : (11 > month) ? "autumn" : 'Invalid date!';
}
