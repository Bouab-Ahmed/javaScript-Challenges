// function camelCasing(chaine) {
//   if (chaine.charAt(0) == chaine.charAt(0).toUpperCase()) {
//     console.log('Hey this is not a camel case!');
//     return;
//   } else {
//     j = -1;
//     chaine
//       .split('') //['c','a','m','e','l','C','a','s','i','n','g']
//       .forEach((e) => (e.toUpperCase() == e ? (j = chaine.indexOf(e)) : j)); //j=5
//     // j != -1 ? chaine.slice(0, j) : (j = 0); // 'camel'
//     return j != -1
//       ? `"${chaine}" => "${chaine.slice(0, j)} ${chaine.slice(j)}"`
//       : 'Hey this is not a camel case!';
//   }
// }
// console.log(camelCasing(chaine));

// const camelCasing = (chaine) => {
//   const arr = chaine.split(''); //['c','a','m','e','l','C','a','s','i','n','g']
//   return arr
//     .map((char) => (char === char.toUpperCase() ? ` ${char}` : char))
//     .join('');
// };

let chaine = 'camelCasing';
const camelCasing2 = (chaine) => {
  return chaine.replace(/([A-Z])/g, ' $1');
};

const a = 2;

console.log(camelCasing2(chaine));
