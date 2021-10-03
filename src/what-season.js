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
  let springDate;
  let month;

  let type = typeof springDate;
  if(type !== "date") {
    throw new Error('Invalid date!');
  }

  try {
    month = date.getMonth();
  } catch(e) {
    return 'Unable to determine the time of year!';
  }

  return (11 === month || month < 2) ? "winter" : (5 > month ) ? "spring" : (8 > month) ? "summer" : (11 > month) ? "autumn" : 'Invalid date!';
}
