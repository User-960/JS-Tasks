// function log(value) {
//   console.log(value)
// }

// log('1')

// setTimeout(() => {
//   log('setTimeout 1')
//   Promise.resolve().then(() => {
//     log('Promise setTimeout')
//   })
// }, 0);

// setTimeout(() => {
//   log('setTimeout 2')
// }, 0);

// Promise.resolve().then(() => {
//   log('Promise 1')
// })

// queueMicrotask(() => {
//   log('queueMicrotask 1')
// })

// Promise.resolve().then(() => {
//   log('Promise 2')
// })

// log('4')

// 1 -> 4 -> Promise 1 -> queueMicrotask 1 -> Promise 2 -> setTimeout 1 -> Promise setTimeout -> setTimeout 2


/* ---------------------------------------------------------------------------------------- */


setTimeout(() => {
  console.log('Timeout 1')
}, 0)

let p = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
})

async function asyncTest() {
 console.log('async code')
}

setTimeout(function timeout() {
  console.log('Timeout 2')
}, 5)

setTimeout(function timeout() {
  console.log('Timeout 3')
})

p.then(() => {
  console.log('Then')
})

asyncTest()

console.log('Script End')

// Promise -> async code -> Script End -> Then -> Timeout 1 -> Timeout 3 -> Timeout 2