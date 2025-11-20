// to print names of students having m akrs greater or equal to 90

// const getNames = () => {
//     let students = [
//   { name: 'Anshuman', marks: 95 },
//   { name: 'Amit', marks: 85 },
//   { name: 'Sneha', marks: 92 },
//   { name: 'Ravi', marks: 70 }
// ];
//     for (let i = 0; i < students.length; i++) {
//         if(students[i].marks >=90){
//             console.log(`${students[i].name}`);
//         }
//     }
// }
// getNames()

// or

const getNames = () => {
    let students = [
  { name: 'Anshuman', marks: 95 },
  { name: 'Amit', marks: 85 },
  { name: 'Sneha', marks: 92 },
  { name: 'Ravi', marks: 70 }
];
    students.filter((student) => student.marks>=90).forEach((student) => console.log(student.name))
}
getNames()