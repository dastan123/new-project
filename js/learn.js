'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Dastan', 'Vladimir'];
// const shortNames = names.filter(name => {
//       return name.length < 5;
// });
// console.log(shortNames);
// console.log(names);
// names.forEach(item => {
//       if (item.length < 5) {
//             console.log(item);
//       }
// });

// map

// let answers = ['IVan', 'DastAn', 'AnnA'];
// const result = answers.map(item => item.toLocaleLowerCase());
// console.log(result);
// console.log(answers);

// let answers = ['Ivan', 'DAsta', 'Anna'];
// answers.forEach(item => item.toLocaleLowerCase()); // NO
// console.log(answers);
// every/some 

// const some = [4, 5, 5];
// console.log(some.every(item => typeof(item) === 'number'));
// console.log(some.some(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 6, 2, 1];
//             // 0     4
//             // 4     5
//             // 9     6
//             // 15    2
//             // 17    1
//             // 18 result
// const res = arr.reduce((sum, current) => sum + current, 5);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);
// // sum === nothing

// const obj = {
//       ivan: 'person',
//       ann: 'person',
//       dog: 'animal',
//       cat: 'animal'
// };

// const newArr = Object.entries(obj);
// // .filter(item => item[1] === 'animal')
// // .map(item => item[0]);

// console.log(newArr);