const { NotImplementedError } = require('../extensions/index.js');

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
function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let newArr = [];
  arr.map((item,index)=>{
    newArr.push(item)
    if(item === '--discard-prev'){
      if(newArr[index-1]){
        newArr.splice(index-1,2)
      }
      else{
        newArr.splice(index,1)
      }
    }
    if(item === '--double-prev'){
      if(arr[index-1]){
        newArr.splice(index,1)
        newArr.push(arr[index-1])
      }
      else{
        newArr.splice(index,1)
      }
    }
    if(item === '--double-next'){
      if(arr[index+1]){
        newArr.splice(index,1)
        newArr.push(arr[index+1])
      }
      else{
        newArr.splice(index,1)
      }
    }
    if(item === '--discard-next'){
      if(arr[index+1]){
        arr.splice(index,2)
        newArr.splice(index,1)
      }else{
        arr.splice(index,1);
        newArr.splice(index,1);
      }
    }
  })
   console.log(newArr)
   return newArr
}

module.exports = {
  transform
};
