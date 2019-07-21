const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

// Given a list of numbers and a number k, return whether any two numbers
// from the list add up to k.
//
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//
// Bonus: Can you do this in one pass?

const containsSum = (array, total) => {

    hashMap = {}

    for (let value of array) {
        if (hashMap[value]) { return true;
        } else { hashMap[total - value] = true
        }
    }

    return false
}

console.log(containsSum([1, 2, 2, 2], 2))
console.log(containsSum([1, 2, 3, 4, 5], 9))
console.log(containsSum([1, 2, 3, 4, 5], 90))

// benchmark.runManyTimes(containsSum)
