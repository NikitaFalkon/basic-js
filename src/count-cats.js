import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(box) {
  let i = 0;

  for(let cell in box) {
    let celling = box[cell];
    for (let itsProbablyCat in celling) {
      if(celling[itsProbablyCat] === "^^") i++;
    }
  }

  return i;
}
