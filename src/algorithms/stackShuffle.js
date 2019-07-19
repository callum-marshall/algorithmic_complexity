const { Benchmark } = require('../benchmark')

const benchmark = new Benchmark

const stackShuffle = (a) => {

  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;

  return newArray
}

console.log(stackShuffle([0,1,2,3,4,5,6,7,8,9]))

// benchmark.runManyTimes(stackShuffle)
