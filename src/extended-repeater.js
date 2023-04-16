const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  const myOptions = options;
  if(!Object.keys(myOptions).includes('separator')){
    myOptions['separator'] = '+'
  }
  if(!Object.keys(myOptions).includes('additionSeparator')){
    myOptions['additionSeparator'] = '|'
  }
  if(!Object.keys(myOptions).includes('repeatTimes')){
    myOptions['repeatTimes'] = 1
  }
  if(!Object.keys(myOptions).includes('addition')){
    myOptions['addition'] = ''
  }
  if(!Object.keys(myOptions).includes('additionRepeatTimes')){
    myOptions['additionRepeatTimes'] = 1
  }
  
  let arrRes = [];
  let myStr = str;

  let someStr = (myOptions.addition+myOptions.additionSeparator).repeat(myOptions.additionRepeatTimes || 1)
  someStr = someStr.slice(0,-myOptions['additionSeparator'].length);
  myStr+=someStr
  for(let i = 0 ; i<myOptions.repeatTimes;i++){
    arrRes.push(myStr+myOptions.separator)
  }
  arrRes = arrRes.join('').slice(0,-myOptions['separator'].length);
  console.log(arrRes)
  return arrRes
}

module.exports = {
  repeater
};
