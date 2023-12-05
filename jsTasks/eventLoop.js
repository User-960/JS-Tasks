function log(value) {
  console.log(value)
}

log('1')

setTimeout(() => {
  log('setTimeout 1')
  Promise.resolve().then(() => {
    log('Promise setTimeout')
  })
}, 0);

setTimeout(() => {
  log('setTimeout 2')
}, 0);

Promise.resolve().then(() => {
  log('Promise 1')
})

queueMicrotask(() => {
  log('queueMicrotask 1')
})

Promise.resolve().then(() => {
  log('Promise 2')
})

log('4')

// 1 -> 4 -> Promise 1 -> queueMicrotask 1 -> Promise 2 -> setTimeout 1 -> Promise setTimeout -> setTimeout 2