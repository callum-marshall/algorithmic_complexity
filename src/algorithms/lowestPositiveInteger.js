const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

// Given an array of integers, find the first missing positive integer in
// linear time and constant space. In other words, find the lowest positive
// integer that does not exist in the array. The array can contain duplicates
// and negative numbers as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0]
// should give 3.
//
// You can modify the input array in-place.

const lowestPositiveInteger = (array) => {

    let result
    let integer = 0

    while (integer != result) {
      integer++
      if (!array.includes(integer)) result = integer
    }

    return result
}

// console.log(lowestPositiveInteger([1, 2, 0]))

benchmark.runManyTimesBig(lowestPositiveInteger)
