const number = 10304.20403;
// result = 300+4+4/10+3/100

const solution = number
  .toString() //'304.43'
  .split('.') //['304' , '43']
  .map((value) =>
    value
      .split('') //[['3','0','4'] , ['4', '3']]
      .map((e) => parseInt(e))
  ) //[[3,0,4] , [4,3]]
  .map((subArr, i) => {
    if (i === 0)
      return subArr
        .reverse() //[[4,0,3] , [4,3]]
        .map((num, j) => num * 10 ** j) //[[4,0,300] , [4,3]]
        .reverse(); //[[300,0,4] , [4,3]]
    return subArr.map((num, j) => (num == 0 ? 0 : `${num}/${10 ** (j + 1)}`)); //[[300,0,4] , ['4/10','3/100']]
  })
  .flat() //[300,0,4,'4/10','3/100']
  .filter((e) => e != 0) //[300,4,'4/10','3/100']
  .join(' + '); //'300 + 4 + 4/10 + 3/100'

console.log(solution);
