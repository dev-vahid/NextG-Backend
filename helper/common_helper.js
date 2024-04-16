var dotenv      = require('dotenv').config();
const crypto    = require('crypto');

const algorithm = process.env.ALGORITHM;
const secretKey = process.env.SECRET_KEY;
const secretIv  = process.env.SECRET_IV;

// Random string
function RandomString(length) {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   let counter = 0;
   while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
   }
   return result;
};

// Encrypting text
function encrypt(text) {
   let cipher    = crypto.createCipheriv(algorithm, Buffer.from(secretKey), secretIv);
   let encrypted = cipher.update(text);
   encrypted     = Buffer.concat([encrypted, cipher.final()]);
   return encrypted.toString('hex');
}

// Decrypting string
function decrypt(string) {
   let encryptedText = Buffer.from(string, 'hex');
   let decipher      = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), secretIv);
   let decrypted     = decipher.update(encryptedText);
   decrypted         = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();
}

module.exports = {RandomString, encrypt, decrypt}