//Func are first class citizens in JS

//1 Function can be assigned to variable
var stuff = function(){console.log('Test')}
stuff();

//2 function as parameter
function a(fn) {
fn();
}
a(function(){console.log('hi there')});

//3 function as return type
function b(){
return function c() {console.log('bye')}
}
var d= b()
d()
