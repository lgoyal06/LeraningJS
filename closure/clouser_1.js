const closure = function() {
let count =0;
return function increment() {
++count;
return count
}
}

const inc= closure()
console.log(inc())
console.log(inc())
console.log(inc())
