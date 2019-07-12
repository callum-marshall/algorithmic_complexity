const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

const myLast = (array) => {
  const last = (array.length - 1)
  return array[last]
}

benchmark.runManyTimes(myLast)
