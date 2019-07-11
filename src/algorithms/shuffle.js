const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

const myShuffle = (array) => {
  let newArray = array
  const half = array.length/2

  for ( i = 0; i < 7; i++ ) {
    let array1 = newArray.slice(0, (half))
    let array2 = newArray.splice(half)

    newArray = []

    while ( array1.length > 0 && array2.length > 0) {
      if (Math.random() > 0.5) {
        newArray.push(array1.pop())
      } else {
        newArray.push(array2.pop())
      }
    }

    newArray = newArray.concat(array1)
    newArray = newArray.concat(array2)
  }

  return newArray

}

// console.log(myShuffle([1,2,3,4,5,6,7,8,9,10]))

benchmark.runManyTimes(myShuffle)
