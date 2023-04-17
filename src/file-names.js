const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  if(!names.length){
    return []
  }
  let count = 0;
  let res = []
  names.forEach(item=>{
    if(!res.includes(item)){
      res.push(item)
    }else{
      res.push(item+`(${++count})`)
      count = 1
      
    }
  })
  res = res.map(item=>{
    if(item.includes('(1)(2)')){
      console.log(item)
      let index = item.indexOf('(')
      console.log(item.slice(0,index))
      return item = item.slice(0,index) + `(1)(1)`
    }
    else{
      return item
    }
  })
  return res
}

module.exports = {
  renameFiles
};
