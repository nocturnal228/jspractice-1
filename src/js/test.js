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