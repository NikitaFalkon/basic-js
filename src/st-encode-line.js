import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(line) {
  let arr = line.split('');
  let finalarr = [];
  let fin = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i+1;
    finalarr[fin]=arr[i];

    while (arr[i] === arr[j] && j < arr.length) {
      finalarr[fin] += arr[i];
      j++;
    }

    fin++;
  }

  for(let i = 0; i < finalarr.length; i++) {
    if(finalarr[i].length > 1) {
      finalarr = finalarr[i]
    }
  }
}
