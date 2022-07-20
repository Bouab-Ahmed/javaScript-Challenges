const uniqueInOrder = (sequance) => {
  const arr = [];
  for (let i = 0; i < sequance.length; i++) {
    if (sequance[i] !== sequance[i + 1]) {
      arr.push(sequance[i]);
    }
  }
  return arr;
};

const uniqueInOrder2 = (sequance) => {
  return typeof sequance === 'object'
    ? sequance.filter((char, i, arr) => char !== arr[i + 1])
    : sequance.split('').filter((char, i, arr) => char !== arr[i + 1]);
};


const uniqueInOrder3 = (sequance) => {
  return [...new Set(sequance)];
};

console.log(uniqueInOrder3('AAAABBBCCDAABBB'));
