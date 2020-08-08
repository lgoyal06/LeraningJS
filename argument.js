function marry(...args){
console.log('ags', args);
console.log(Array.from(arguments));
return  `${args[0]} is now married to ${args[1]}`
}

console.log(marry('Lalit', 'Goyal'));
