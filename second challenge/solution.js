const abbrevName = (name) => {
  name = name.split(' '); //['ahmed','bouab']
  return name.length == 2
    ? name
        .map((item) => item.charAt(0).toUpperCase()) //['A','B']
        .join('.') //'A.B'
    : 'name must contains 2 words';

  // if (name.length == 2) {
  //   return name.map((e) => e.charAt(0).toUpperCase()).join('.');
  // } else {
  //   return 'name must contain 2 words';
  // }
};
console.log(abbrevName('ahmed bouab'));
