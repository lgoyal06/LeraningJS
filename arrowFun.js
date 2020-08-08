const obj = {
name: 'Billy',
sing() {
console.log('a', this);
var anotherFunc = () => {
console.log('b', this);
}
anotherFunc();
}	 
}
obj.sing();
