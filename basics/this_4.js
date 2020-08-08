//Object oriented way of creating class. My theory
//1: Promotes DRY 
//2: Gives methods access to their object
const obj = {
name: 'Lalit',
sing: function() {
return 'lalalal' + this.name;
},
singAgain() {
return this.sing()  + '!'

}
}

console.log(obj.sing());
console.log(obj.singAgain());
