const wizard = {
name: 'Lalit',
health: 50,
heal() {
return this.health=100;
}

}


const archer = {
name: 'Mohan',
health: 30
}

console.log('1', wizard);
wizard.name = 'Lucky';
wizard.heal();
console.log('After healing', wizard);
console.log('Before Heal of Archer ', archer);
wizard.heal.call(archer);
console.log('After healing of Archer', archer);
