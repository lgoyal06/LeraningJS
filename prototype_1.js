let human = {
mortal: true
}
let socrates = Object.create(human)
socrates.age = 45
console.log(human.isPrototypeOf(socrates))
console.log(socrates.__proto__)
console.log(socrates.mortal)
console.log(socrates)
