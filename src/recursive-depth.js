import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let depth = 1;

export default class DepthCalculator {
  calculateDepth(array) {
     for(let i = 0; i < array.length; i++) {
       let part = array[i];
       if(Array.isArray(part)) {
         depth++;

         return this.calculateDepth(part);
       }
     }

     return depth;
  }
}
