function letPersonLogin(person, fn){
console.log(person.level)
if(person.level === 'Admin') {
console.log('Calling Admin');
fn(500000)
} else if(person.level === 'user'){
fn(100000)
}
return giveAccessTo(person.name)
}

var giveAccessTo = (name) => console.log('Access granted to', name);

function authenticate(verify) {
let array = [];
for(let i=0;i<verify;++i){
array.push(i);
}
return true;
}

letPersonLogin({level: 'user', name:'Time'}, authenticate)
letPersonLogin({level: 'Admin', name:'Admin'}, authenticate)
