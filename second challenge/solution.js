const abbrevName = (name) => {
  //'ahmed bouab'
  name = name.split(' '); //['ahmed','bouab']
  return name.length == 2
    ? name
        .map((item) => item.charAt(0).toUpperCase()) //['A','B']
        .join('.') //'A.B'
    : 'name must contains 2 words';
};
console.log(abbrevName('ahmed bouab'));
