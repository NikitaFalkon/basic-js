import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);

    return this;
  },
  removeLink(position) {
    // try {
      if (position - 1 < 0 || !this.arr[position - 1]) {
        throw "You can\'t remove incorrect link!";
      }
    // } catch (e) {
    //   return this;
    // }

    this.arr.splice(position-1, 1);

    return this;
  },
  reverseChain() {
    let ar = this.arr.reverse();
    this.arr = ar;

    return this;
  },
  finishChain() {
    let str = "";

    for(let chain = 0; chain < this.arr.length; chain++) {
      if(chain === 0) {
        str = "( " + (this.arr)[chain] + " )"
      } else {
        str = str + "~~( " + (this.arr)[chain] + " )";
      }
    }

    return str;
  }
};
