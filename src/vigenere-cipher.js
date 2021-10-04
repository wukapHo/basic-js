import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
              'H', 'I', 'J', 'K', 'L', 'M', 'N',
              'O', 'P', 'Q', 'R', 'S', 'T', 'U',
              'V', 'W', 'X', 'Y', 'Z'];

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) throw new Error('Incorrect arguments!');

    const arrMessage = message.toUpperCase().split('');
    const arrKey = key.toUpperCase().split('');
    const encryptedMessage = [];

    for (let i = 0, j = 0; i < arrMessage.length; i++) {
      if (this.alphabet.includes(arrMessage[i])) {
        encryptedMessage.push(this.alphabet[(this.alphabet.indexOf(arrMessage[i]) + this.alphabet.indexOf(arrKey[j])) % this.alphabet.length]);
        j = (j + 1) % arrKey.length;
      } else {
        encryptedMessage.push(arrMessage[i]);
      }
    }

    return this.direct ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }

  decrypt(message, key) {
    if (arguments.length < 2 || arguments[0] == undefined || arguments[1] == undefined) throw new Error('Incorrect arguments!');

    const arrMessage = message.toUpperCase().split('');
    const arrKey = key.toUpperCase().split('');
    const decryptedMessage = [];

    for (let i = 0, j = 0; i < arrMessage.length; i++) {
      if (this.alphabet.includes(arrMessage[i])) {
        decryptedMessage.push(this.alphabet[(this.alphabet.indexOf(arrMessage[i]) + this.alphabet.length - this.alphabet.indexOf(arrKey[j])) % this.alphabet.length]);
        j = (j + 1) % arrKey.length;
      } else {
        decryptedMessage.push(arrMessage[i]);
      }
    }

    return this.direct ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
  }
}
