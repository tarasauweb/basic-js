const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine( str ) {
  let res = ''
  let countWord = 1
  let myStr = str.split('')
  myStr.forEach((item,index)=>{
      if(item === str[index+1]){
          countWord++
          
      }
      else{
          if(countWord <= 1) countWord = ''
          res+=`${countWord}${item}`
          countWord = 1
      }
  })
  return res
  
}

module.exports = {
  encodeLine
};
