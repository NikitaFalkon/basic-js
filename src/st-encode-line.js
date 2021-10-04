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
export default function encodeLine(str) {
  let arr = str.split('');
  let part = "";
  let finalstr = "";
  for(let i = 0; i < arr.length; i++) {
    if(part.search(arr[i]) !== -1 || part === "") {
      part = part + arr[i];
    } else {
      finalstr = finalstr + f(part);
      part = "";
      part = part + arr[i];
    }
    
    if(i === arr.length-1) {
      finalstr = finalstr + f(part);
    }
  }

  return finalstr;
}

function f(part) {
  let parti;
  if(part.length > 1) {
    parti = part.length + part[0];
  } else {
    parti = part;
  }
  return  parti;
}
