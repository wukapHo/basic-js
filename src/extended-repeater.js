import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let resStr = '';
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.hasOwnProperty('addition') ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const add = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  resStr = (str + add + separator).repeat(repeatTimes).slice(0, -separator.length);

  return resStr;
}
