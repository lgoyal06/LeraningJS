var b = {
name: 'jay',
say() { console.log(this)}
}

var c = {
name: 'Jay c',
say() {
return function() {console.log('This is a function object'); console.log(this)}
}
}
var d = {
name: 'Jay1',
say() {return () => console.log(this)}
}

b.say();
d.say()();
c.say()();
