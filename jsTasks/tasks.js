// #1
// What are you logging console.log into Promise.race?
const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "один");
});
 
const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "два");
});
 
Promise.race([first, second]).then(res => console.log(res));

// #2
// What is the meaning of result?
const resultOutput = parseInt("7*6", 10);
console.log(resultOutput)

// #3
// What will be the output value?
const client = {
  name: "Mr. Smith",
  age: 21
}
 
const increaseAge = (x = { ...client }) => x.age += 1
const changeAgeAndName = (x = { ...client }) => {
  x.age += 1
  x.name = "Ivan"
}
 
increaseAge(client)
changeAgeAndName()
 
console.log(client)

// #4
// What will this code output to the console? (Hoisting)
let x = 3;
function fn() {
    x = 10;
    return;
    function x() {}
}

fn();
console.log(x);

// #5
// Symbol
let user1 = {
 name: 'User 1'
}

let id = Symbol('id')

user1[id] = 1

let user2 = {
 name: 'User 1',
 [id]: 2
}

let user3 = Object.assign({}, user2)
user3.name = 'User 3'
user3[id] = 3

console.log(user3)
console.log(user3[id])
console.log(typeof user3[id])

console.log(Reflect.ownKeys(user2))

// #6
// Object.assign
let obj1 = {'a': 1, 'b': 2};
let obj2 = {'c': 3, 'd': 4};
let newObj = Object.assign({}, obj1, obj2);
console.log(newObj); 

let arr = [1, 2, 3, 4];
let newArr = Object.assign([], arr);
console.log(newArr); 

// #7
// Generator (yield, *)
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); 

async function* asyncGenerator() {
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

(async () => {
    for await (const num of asyncGenerator()) {
        console.log(num);
    }
})();