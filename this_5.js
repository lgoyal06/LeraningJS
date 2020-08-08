//Execute same code for multiple objects

function importantPerson() {
return this.name + '!';
}
const name = 'Global'

const obj1 = {
name : 'Lucky',
importantPerson: importantPerson
}

const obj2 = {
name: 'Goyal',
importantPerson: importantPerson

}
console.log(importantPerson());
console.log(obj1.importantPerson());
console.log(obj2.importantPerson());
