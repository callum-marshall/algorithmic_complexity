const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

const aliceShuffle = (array) => {

  let newArray = []
  const num = array.length

  for ( i = 0; i < num; i++ ) {

    rand = Math.floor(Math.random() * Math.floor(array.length - 1))
    newArray.push(array[rand])
    array[rand] = array[array.length -1 ]
    array.pop()

  }

  return newArray
}

// console.log(aliceShuffle([0,1,2,3,4,5,6,7,8,9]))

benchmark.runManyTimes(aliceShuffle)
