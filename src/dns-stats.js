const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  if(!arr.length){
    return {}
  }
  let obj = {}
  let domain = ''
  arr.sort((a,b)=>{
    return a.length - b.length
  })
  domain = arr[0]
  let domainZone = domain.slice(domain.indexOf('.'))
  arr.forEach(item => {
    let domain = item.replace(domainZone , '').split('.').reverse().join('.')
    obj[`${domainZone}.${domain}`] = 0;
  });
  arr.forEach(item=>{
    let domain = item.replace(domainZone , '').split('.').reverse().join('.')
    for(let i = 0 ; i <arr.length;i++){
      if(arr[i].split('.').reverse().join('.').includes(domain)){
        for(let key in obj){
          if(key.toString() === `${domainZone}.${domain.toString()}`){
            obj[key]++
          }
        }
      }
    }
  })

  obj[domainZone] = arr.length
  return obj
  
}

module.exports = {
  getDNSStats
};
