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
  return arr.map((item,index)=>{
      
    if(item === '--discard-next'){
      return arr.splice(index , 2)
    }
    if(item === '--discard-prev'){
      return arr.splice(--index , 2)
    }
    if(item === '--double-next'){
      return item = arr[++index]
    }
    if(item === '--double-prev'){
      return item = arr[--index]
    }
    else{
      return item
    }
    
  })
}

module.exports = {
  transform
};
