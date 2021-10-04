import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(str) {
  let arr = str.split('');
  let part = "";
  let finalstr = "";
  for(let i = 0; i < arr.length; i++) {
    if(part.search(arr[i])) {
      part = part + arr[i];
    } else {
      if(part.length > 1) {
        part = part.length + part[0];
      }
      finalstr = finalstr + part;
    }
  }

  return finalstr;
}
