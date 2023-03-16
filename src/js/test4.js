const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return str = "Ошибка!";
    }
    return str.split('').reverse().join('')
}


reverse(someString);
console.log(reverse(someString));

//
//




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    arr.forEach(curr => {
        if (curr !== missingCurr) {
            str += `${curr}\n`
        }
    });
    console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');