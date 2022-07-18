/*
  Loop Challenge
*/

// //get number of admins
// const myRealAdmins = myAdmins.indexOf('Stop');
// document.write(`<div>We Have ${myRealAdmins} Admins </div> `);
// //set counter to count the number of employees for each admin
// let counter = 0;

// //start loop
// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === 'Stop') {
//     break;
//   } else {
//     document.write(`<hr>`);
//     //open a div to write content
//     document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
//     document.write(`<h3>Team Members</h3>`);
//     for (let j = 0; j < myEmployees.length; j++) {
//       //compare the first char of each item in myEmployees with first char of each item in myAdmins
//       if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
//         document.write(`<p>-${++counter} ${myEmployees[j]}</p>`);
//       }
//     }
//     //reset counter
//     counter = 0;
//     //close div
//     document.write(`</div>`);
//   }
// }

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];

let myEmployees = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
  'Anwar',
];

const myRealAdmins = myAdmins.slice(0, myAdmins.indexOf('Stop')); // ['Ahmed', 'Osama', 'Sayed']

myRealAdmins.forEach((admin, i) => {
  const filteredEmp = myEmployees.filter(
    (emp) => emp.charAt(0) === admin.charAt(0)
  );
  document.write(`<hr>`);
  document.write(`<div>The Admin For Team ${i + 1} Is ${admin}`);
  document.write(`<h3>Team Members</h3>`);
  filteredEmp.forEach((emp, j) => {
    document.write(`<p>-${++j} ${emp}</p>`);
  });
});

// myAdmins.forEach((admin, index, arr) => {
//   if (admin === 'stop') {
//     arr.slice(0, index).forEach((item) => {
//       const filteredEmp = myEmployees.filter(
//         (emp) => emp.charAt(0) === item.charAt(0)
//       );
//       document.write(`<hr>`);
//       document.write(`<div>The Admin For Team ${i + 1} Is ${item}`);
//       document.write(`<h3>Team Members</h3>`);
//       filteredEmp.forEach((emp, j) => {
//         document.write(`<p>-${++j} ${emp}</p>`);
//       });
//     });
//   }
// });
