// Task 1

// let person = {
//   name: "John",
//   age: 25,
//   showInfo: function () {
//     console.log("Name: " + this.name + ", Age: " + this.age);
//   },
// };

// person.showInfo();

// Task 2
// function calcSum(...args) {
//   return args.reduce((sum, current) => sum + current, 0);
// }

// const ex1 = calcSum(1, 2, 4, 20, 41);
// console.log(ex1);

// Task 3
// const firstArray = [1, 2, 3, 4, 5];
// const exNumber = 6;
// const newArray = [...firstArray, exNumber];
// console.log(newArray);

// Task 4
// let person = {
//   firstName: "John",
//   lastName: "Green",
// };
// const { firstName, lastName } = person;
// console.log(firstName);
// console.log(lastName);

// Task 5
// function sumOfEvenNumbers(numbers) {
//   return numbers.reduce(function (sum, currentNumber) {
//     if (currentNumber % 2 === 0) {
//       return sum + currentNumber;
//     } else {
//       return sum;
//     }
//   }, 0);
// }
// var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var result = sumOfEvenNumbers(numbersArray);
// console.log(result);

// Task 6

// const newArray = ["Привет", "Мир", "Как", "дела"];
// const lengthsArray = newArray.map((str) => str.length);
// console.log(lengthsArray);

// Task 7
// const people = [
//   { name: "John", age: 19 },
//   { name: "Anna", age: 30 },
//   { name: "Emilia", age: 20 },
//   { name: "Angela", age: 35 },
// ];

// const limitAge = 25;
// const filterPeople = people.filter((person) => person.age > limitAge);

// console.log(filterPeople);
