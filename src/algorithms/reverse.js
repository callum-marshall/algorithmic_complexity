const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

const myReverse = (array) => {
  const newArray = []
  for (let i = (array.length - 1); i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}

console.log(myReverse([1,2,3,4,5]))

benchmark.runManyTimes(myReverse)
