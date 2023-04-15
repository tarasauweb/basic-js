const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let arrSort = [];
  let arrSome = [];

  arr.forEach(item=>{
    if(item!==-1){
      arrSort.push(item)
    }
  })
  let indexElem = 0;
  arrSort.sort((a,b)=>a-b)
  arr.forEach(item=>{
    if(item === -1){
      arrSome.push(item)
    }
    else{
      arrSome.push(arrSort[indexElem]);
      indexElem++
    }
  })
  return arrSome
}

module.exports = {
  sortByHeight
};
