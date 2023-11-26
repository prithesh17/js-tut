const name = "Prithesh";
const collegeName = "MITE";
const USN = "4MT21IC037";
console.log(`My name is ${name}. My USN is ${USN} and I am studying in ${collegeName}.`)

const str = `My name is ${name}. My USN is ${USN} and I am studying in ${collegeName}.`

console.log(str.replaceAll(" ", "-"));

console.log(str.split(' '));

const newString = str.split(' ');
console.log(newString[5])

const str_2 = 'The quick brown fox jumps over the lazy dog.';

console.log(str_2.slice(0,10));
console.log(str_2.substring(0,10));

console.log(str_2);
console.table([name,USN,collegeName,str,str_2]);
