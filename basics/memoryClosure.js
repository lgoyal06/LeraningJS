function heavyDuty(index){
const bigArray = new Array(7000).fill(':)')
console.log('created!')
return bigArray[index]
}

console.log(heavyDuty(688));
console.log(heavyDuty(434));
console.log(heavyDuty(343));

function heavyDuty2() {
const bigArray = new Array(7000).fill(':)');
console.log('created Again!')
return function(index){
return bigArray[index];
 }
}
const heavyDuty21 = heavyDuty2()
console.log(heavyDuty21(688));
console.log(heavyDuty21(434));
console.log(heavyDuty21(343));
