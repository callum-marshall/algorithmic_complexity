const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

const myShuffle = (array) => {

  let newArray = []
  const num = array.length

  // for each element in the array
  for ( i = 0; i < num; i++ ) {

    // get a random index number
    rand = Math.floor(Math.random() * Math.floor(array.length - 1))

    // copy that random element to a new array
    newArray.push(array[rand])

    // move the last element in the array to the position of the copied element
    array[rand] = array.pop()

  }

  return newArray
}

// console.log(myShuffle([0,1,2,3,4,5,6,7,8,9]))

benchmark.runManyTimes(myShuffle)
