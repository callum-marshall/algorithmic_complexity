class Benchmark {

  time() {
    return Date.now()
  }

  run(myFunction, array) {
    const start = this.time()
    myFunction(array)
    const end = this.time()
    return end - start
  }

  generateArray(size) {
    const array = Array(size).fill().map(() => Math.round(Math.random() * 1000))
    return array
  }

  runManyTimes(myFunction) {
    for (let size = 50000; size <= 1000000; size = size + 50000) {
      const array = this.generateArray(size)
      const diff = this.run(myFunction, array)
      console.log(`${diff}`)
    }
  }

  runManyTimesSmall(myFunction) {
    for (let size = 500; size <= 10000; size = size + 500) {
      const array = this.generateArray(size)
      const diff = this.run(myFunction, array)
      console.log(`${diff}`)
    }
  }

  runManyTimesBig(myFunction) {
    for (let size = 500000; size <= 10000000; size = size + 500000) {
      const array = this.generateArray(size)
      const diff = this.run(myFunction, array)
      console.log(`${diff}`)
    }
  }
}

module.exports = {
  Benchmark
}
