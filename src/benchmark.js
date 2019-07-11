class Benchmark {

  time() {
    return new Date(Date.now())
  }

  run(myFunction, array) {
    const start = this.time()
    myFunction(array)
    const end = this.time()
    const diff = end - start
    return diff
  }

  generateArray(size) {
    const array = Array(size).fill().map(() => Math.round(Math.random() * 1000))
    return array
  }

  runManyTimes(myFunction) {
    for (let size = 50000; size <= 1000000; size = size + 50000) {
      const array = this.generateArray(size)
      const diff = this.run(myFunction, array)
      console.log(`| ${size} || ${diff}`)
    }
  }
}

module.exports = {
  Benchmark
}
