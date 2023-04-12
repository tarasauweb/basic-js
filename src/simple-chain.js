const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  myArr : [],
  getLength() {
    this.myArr.length
    return this
  },
  addLink( value ) {
    this.myArr.push((`( ${value} )`))
    return this
  },
  removeLink( position ) {
    if(!this.myArr[position-1]){
      this.myArr = []
      throw new Error("You can't remove incorrect link!");
    }
    this.myArr.splice(position-1,1);
    return this
  },
  reverseChain() {
    this.myArr.reverse()
    return this
  },
  finishChain() {
    const chain = this.myArr.join(`~~`);
    this.myArr = [];
    return chain
  }
};

module.exports = {
  chainMaker
};
