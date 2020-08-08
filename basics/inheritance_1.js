const dragon = {
name:'China',
fire(){
console.log("This is fire");
},
fight() {
return 5;
}
}

const tiger = {
name:'India',
fight() {
return 10
}
}

tiger.__proto__ = dragon;
tiger.fire()
console.log(dragon.isPrototypeOf(tiger))   // Does tiger inherit from dragon
for(let prop in tiger) {
console.log(prop);
if(tiger.hasOwnProperty(prop)){
console.log('Own property:::>>> '+prop)
}
}
