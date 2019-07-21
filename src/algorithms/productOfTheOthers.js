const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

// Given an array of integers, return a new array such that each element at
// index i of the new array is the product of all the numbers in the original
// array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would
// be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output
// would be [2, 3, 6].
//
// Follow-up: what if you can't use division?

const productOfTheOthers = (array) => {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;

  // let newArray = []
  // array.forEach(function (number) {
  //   newArray.push((array.reduce(reducer)/number))
  // })

  const newArray = array.map(x => (array.reduce(reducer)/x))
  return newArray
}

// console.log(productOfTheOthers([1, 2, 3, 4, 5]))

benchmark.runManyTimes(productOfTheOthers)
