const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool){
    this.bool = bool || null
    this.alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(str , key) {
    if (!str || !key) throw new Error ('Incorrect arguments!');
    str = str.toUpperCase();
    key = key.toUpperCase();
  }
  decrypt(str , key) {
    if (!str || !key) throw new Error ('Incorrect arguments!');
    str = str.toUpperCase();
    key = key.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
