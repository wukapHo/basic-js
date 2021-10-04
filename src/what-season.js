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
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (date.toString() !== (new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())).toString()) throw new Error('Invalid date!');

  let month = date.getMonth();
  if (month <= 1 || month === 11) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else {
    return 'fall';
  }
}
