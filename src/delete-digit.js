const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let str = n.toString().split('');
  let res = 0;
  str.forEach((item,index)=>{
    let myRes = +((str.slice(0,index)+str.slice(index+1))).split(',').join('')
    if(myRes>res){
      res = myRes
    }
  })
  return res
}

module.exports = {
  deleteDigit
};
