//Closure let inner function to access properties, variable of outer functions 
function memoizedAddTo80() {
let cache = {}
return function(n) {
if(n in cache) {
return cache[n]
} else {
console.log('long time');
cache[n]=n+80;
return cache[n]
}

}
}

const memoized = memoizedAddTo80();
console.log(memoized(6));
console.log(memoized(6));
