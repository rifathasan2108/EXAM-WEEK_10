// 1 calculateDifference
function calculateDifference(a, b) {
    const difference = a - b;
    console.log(`Difference between ${a} and ${b}: ${difference}`);
    return difference;
}
calculateDifference(10, 5);

// 2 isOdd
function isOdd(num) {
    const result = num % 2 !== 0;
    console.log(`${num} is odd: ${result}`);
    return result;
}

isOdd(7);

// 3 findMin
function findMin(arr) {
    const min = Math.min(...arr);
    console.log(`Minimum value in [${arr}]: ${min}`);
    return min;
}

findMin([5, 2, 9, 1, 7]);

// 4 filterEvenNumbers
function filterEvenNumbers(arr) {
    const evens = arr.filter(num => num % 2 === 0);
    console.log(`Even numbers in [${arr}]: [${evens}]`);
    return evens;
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// 5sortArrayDescending
function sortArrayDescending(arr) {
    const sorted = arr.slice().sort((a, b) => b - a);
    console.log(`Array [${arr}] sorted in descending order: [${sorted}]`);
    return sorted;
}

sortArrayDescending([5, 2, 9, 1, 7]);

// 6 lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    if (!str) return str;
    const result = str.charAt(0).toLowerCase() + str.slice(1);
    console.log(`String "${str}" with first letter lowercased: "${result}"`);
    return result;
}

lowercaseFirstLetter("Hello World");

// 7 countVowels

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    const count = Array.from(str).filter(char => vowels.includes(char)).length;
    console.log(`Number of vowels in "${str}": ${count}`);
    return count;
}

countVowels("Hello World");

// 8 findAverage
function findAverage(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    console.log(`Average of [${arr}]: ${average}`);
    return average;
}

findAverage([1, 2, 3, 4, 5]);

