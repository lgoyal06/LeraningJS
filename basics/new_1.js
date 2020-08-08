function Elf(name, weapon){
return {
name,
weapon
}
}
const peter = Elf('lALIT', 'FIRE');
console.log(peter.name)
console.log(peter)


function Elf1(name, weapon){
this.name = name;
this.weapon = weapon;
}
Elf1.prototype.attack = function() {
//console.log('created');
return 'attack with ' + this.weapon;
}
const lalit = new Elf1('Lucky','Stone');
console.log(lalit.name)
console.log(lalit.weapon)
console.log(lalit.attack())


const lalit1 = new Elf1('Lucky1','Stone1');
console.log(lalit1.name)
console.log(lalit1.weapon)
console.log(lalit1.attack())
