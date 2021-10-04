import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(array) {
  let arr = [];

   if(!Array.isArray(array)) {
     throw new Error('\'arr\' parameter must be an instance of the Array!');
   }

    let ind = 0;
    for(let dig = 0; dig < array.length; dig++) {
      switch (array[dig]) {
        case "--double-next":
          if(dig+1 < array.length) {
            arr.push(array[dig+1]);
          }
          break;
        case "--discard-next":
          if(dig+1 < array.length) {
            dig++;
          }
          break;
        case "--discard-prev":
          if(dig-1 > -1) {
            arr.pop();
          }
          break;
        case "--double-prev":
          if(dig-1 > -1 && (array[dig-2] !== "--discard-next")) {
            arr.push(array[dig-1]);
          }
          break;
        default:
          arr.push(array[dig]);
      }
    }
  // }

  return arr;
}
