const wizard = {
name: 'Lalit',
health: 50,
heal(num1, num2) {
return this.health+=num1+num2;
}

}


const archer = {
name: 'Mohan',
health: 30
}

console.log('1', wizard);
wizard.name = 'Lucky';
wizard.heal(34,45);
console.log('After healing', wizard);
console.log('Before Heal of Archer ', archer);
wizard.heal.apply(archer,[50,30]);
console.log('After healing of Archer', archer);
