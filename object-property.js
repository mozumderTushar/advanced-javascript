const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maanaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'},
];

// const name = [];

// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const result = element.name;
//     name.push(result);
// }

// console.log(name);

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const grater = student.filter(s => s.id > 40);
const graterOne = student.find(s => s.id > 40);
console.log(graterOne);