const elf = {
name: 'Orwell',
weapon:   'bow',
attach() {
return 'i am attached'+ this.name
}
}

console.log(elf.name)
console.log(elf.weapon)
console.log(elf.attach())
