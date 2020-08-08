//Primitive type with pass by value
var a = 10;
var b = a;
++b;
console.log(a)
console.log(b)

//Non primitive types with pass by Reference
var ob1 = {name: "lalit", password: '122'}
var ob2 = ob1;
ob2.password = 'changeme'

console.log(ob1.password)
console.log(ob2.password)

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(3232323)
console.log(d)
console.log(c)

//Cloning of Array
let c1 = [2, 3, 4, 54]
var d1 = []
d1 = d1.concat(c1)

let c1 = [4]
console.log(c1)

d1.push(3232323)
console.log(d1)
console.log(c1)

let obj = {a: 'a', b: 'b', c: {c2: 'c1'}}
let clone = {...obj}
clone.a = 4
clone.c.c2 = 5
console.log(obj)
console.log(clone)