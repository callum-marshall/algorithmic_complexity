const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

const fizzBuzz = (array) => {

  let answer = []

  array.forEach(function (number) {
    let string = ''
    if (number % 3 === 0) string += 'Fizz'
    if (number % 5 === 0) string += 'Buzz'
    if (string.length === 0) string += `${number}`
    answer.push(string)
  })

  return answer

}

// const test = Array.from(Array(100), (_,x) => x + 1)

// console.log(fizzBuzz(test))

benchmark.runManyTimes(fizzBuzz)
