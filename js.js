// // Налаштування
// const myArray = [];

// // Змініть код лише під цим рядком
// for (let i = 9; i >= 1; i -= 2) {
//     myArray.push(i);
//     console.log(i);
// };
// console.log("🚀 ~ myArray:", myArray)


// Оголосіть та ініціалізуйте змінну total до 0.
// Використайте цикл for, щоб додати значення кожного елемента масиву myArr до total.

// // Налаштування
// const myArr = [2, 3, 4, 5, 6];

// // Змініть код лише під цим рядком
// let total = 0;

// for (let i = 0; i < myArr.length; i += 1) {
//     total += myArr[i];
// }

// console.log(total);

// Змініть функцію multiplyAll так, щоб повертався добуток усіх чисел у підмасивах arr.

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//     for (let i = 0; i < arr.length; i += 1) {
//         for (let j = 0; j < arr[i].length; j += 1) {
//             console.log(arr[i][j]);;
//             product *= arr[i][j];
//         }
    
// }
//   // Змініть код лише над цим рядком
//   return product;
// }

// ;
// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));



// Змініть цикл while у коді на цикл do...while так,
// щоб цикл передавав лише число 10 до myArray, та i дорівнювала 11, коли код закінчить виконання.

// Налаштування
// const myArray = [];
// let i = 10;

// // Змініть код лише під цим рядком
// do {
//   myArray.push(i);
//   i++;
// } while (i < 10);


// Напишіть рекурсивну функцію sum(arr, n), яка повертає суму перших n елементів масиву arr.
// function sum(arr, n) {
  // Змініть код лише під цим рядком
    // if (n <= 0) {
    //     return 0
    // } else {
    //     return sum(arr, n - 1) + arr[n - 1];
    // }
  // Змініть код лише над цим рядком
// }
// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));


// Пошук профілю
// У нас є масив об'єктів, які представляють різних людей зі списку контактів.

// Функція lookUpProfile, яка приймає name та властивість (prop) як аргументи,
// вже записана для вас.

// Функція повинна перевірити, чи name дійсно є ім’ям (firstName) контакту
// і надана властивість(prop) є властивістю цього контакту.

// Якщо обидва є істинними, то поверніть значення цієї власності.

// Якщо name не відповідає жодному контакту, поверніть рядок No such contact.

// Якщо prop не збігається з жодною дійсною властивістю контакту,
// що відповідає name, поверніть рядок No such property.



// Налаштування
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
    // Змініть код лише під цим рядком
//   let contactFound = false;
//   for (const contact of contacts) {
//     if (name === contact.firstName) {
//     contactFound = true;
//       if (contact.hasOwnProperty(prop)) {
//         return contact[prop];
//       } else { return 'No such property'; }
//     }
//   } if (!contactFound) { return 'No such contact'; }
  // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Akira", "address"));
// console.log(lookUpProfile("Akira", "likes"));

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(10));

// Змініть код лише під цим рядком
// function countdown(n){
//   if (n < 1) {
//     return [];
//   } else {
//     let countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
    
//   }
// }
// Змініть код лише над цим рядком
// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const range = rangeOfNumbers(startNum, endNum - 1)
    range.push(endNum);
    return range;
  }
}
 

console.log(rangeOfNumbers(1, 5));