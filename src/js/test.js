// const currOfUSD = 28,
//     currOfEUR = 32
//     discount = 0.7

// function convert(amount, curr, name) {
//     console.log(amount * curr, name, 'Конвертация')
//     return amount * curr
// }

// function sale(result, name) {
//     console.log(result * discount, name, 'Со скидкой')
// }
// sale(convert(500, currOfUSD, 'USD'), 'USD')
// convert(1254, currOfEUR, 'EUR')

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if(i === 3) return console.log('Done!')
//     }
// }

// test()


// function returnNeighboringNumbers(num) {
// console.log(num -1, num, num +1)
// return [num -1, num +1] 
// }
// returnNeighboringNumbers(25)

// function getMathResult (num, multiple) {
//     if (typeof(multiple) !== 'number' || multiple <= 0) {
//         console.log(num)
//         return num    
//     }

//     let str = ''

//     for (let i = 1; i <= multiple; i++) {
//         if (i === multiple) {
//             str += `${num * i}`
//         } else {
//             str += `${num * i}---`
//         }
// }
// return str && console.log(str)
// }

// getMathResult (250, 3)
// for (let i = 1; i <= 8; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i)
// }


// }
// for (let i = 1; i < 7; i++) {
//     for (let j = 6; j > i; j--) {
//         result += '*'
//     }
//     result += '\n'
// }
// console.log(result)

// let result = ''
// const length = 5

// for (let i = 0; i <= length; i++) {
//     for (let j = 0; j < length - i; j++) {
//         result += " "
//     }
//     for (let j = 0; j < 2 * i + 10; j++) {
//         result += "*"
//     }
//     result += "\n"
// }
// console.log(result)

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********

// let result = ''
// const lenght = 13

// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n'
//     console.log(result)
// }


// for (let i = 20; i > 10; i--) {
//     if (i === 12)  {
//          break
//      }
//     console.log(i)
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0)
//     console.log(i)
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//     continue;
//     }
//     console.log(i);
// }

// let i = 2
// while (i <= 16) {
//     if (i % 2 == 0) {
//         i++
//         continue;
//     }
//     else {
//         console.log(i)
//     }
//     i++
// }

// calculating 

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(10, 20));

// стрелочная функция

// const calc = (a, b) => {
//     return a + b;
// }

// console.log(calc(20, 50));

// использование локальной переменной в глобальной строке

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNumber = ret();
// console.log(anotherNumber);


const options = {
    name: 'for let down',
    width: 1024,
    height: 1280,
    colors: {
        background: 'black',
        border: '5px',
        mt: '10px'
    },
    // makeTest: function () {
    //     console.log("Wallah noice bruh!");
    // }
};
// options.makeTest();
const {background, border, mt} = options.colors; // чтобы деструктуризировать обьект достать содержимое из ключа.
console.log(background, border, mt);
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${key} внутри себя имеет переменную ${i}, которая имеет значение ${options[key][i]}`);
            } 
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
        }   
}   
console.log("Кол-во свойств:", Object.keys(options).length);

//

const arr = [35, 111, 52, 42, 25];

arr.sort(function(a, b) { // позволяет отсортировать числа по порядку с помощью функции которая применима к sort
    return a - b;
});
console.log(arr);
// arr.pop(); // удаляет последний обьект из массива
// arr.push(10); // пушит какой-либо заданный обьект в конец массива

// console.log(arr);

// три способа узнать кол-во обьектов в массиве

// for (let i = 0; i < arr.length; i++) { 
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, index, name) {
//     console.log(`${index}: ${item} находится внутри массива ${name}`);
// })

// const str = prompt("", "");
// const products = str.split(", ")
// console.log(str)

function copy(mainObject) {                     // функция копирования обьектов
    let objCopy = {}
    
    let key;
    for (key in mainObject) {
        objCopy[key] = mainObject[key];
    }

    return objCopy;
}

const numbers = {
    a: 1,
    b: 3,
    c: 23,
    BBC: {
        f: 3,
        d: 23
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 228

console.log("Стандартная конструкция:", numbers);
console.log("Скопированная конструкция:", newNumbers);

//копирование массива

const oldArr = [1, 2, 3],
    newArr = oldArr.slice();
newArr[2] = 23;
console.log("Старый массив:", oldArr, "Скопированный массив:", newArr);

const video = ['youtube', 'uatube'],
      blogg = ['wordpress', 'blogger'],
      ethernet = [...video, ...blogg, 'fakeTaxi', 'coolTaxi']; // ... - оператор при помощи которого можно вытащить информацию из указанного массива
console.log(ethernet);