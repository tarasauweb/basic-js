const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let newArr = []
  for(let i = 0 ; i < arr1.length;i++){
    for(let key =0 ;key< arr2.length;key++){
      if(arr1[i]===arr2[key]){
        newArr.push(arr1[i])
        arr2.splice(key,1)
        break
      }
    }
  }
  return newArr.length
}

module.exports = {
  getCommonCharacterCount
};
