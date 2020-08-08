const makeNuclearButton = () => {
let timeWithoutDestruction = 0
const passTime = () => timeWithoutDestruction++;
const totalPeaceTime = () => timeWithoutDestruction;
let launch = () => {
timeWithoutDestruction = -1;
return 'boom';
}
console.log('Before passtime start');
//setInterval(passTime, 100)
return {
totalPeaceTime: totalPeaceTime,
launch: launch

}
}
const ohno = makeNuclearButton();
console.log(ohno.launch())


