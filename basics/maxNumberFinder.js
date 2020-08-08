const array =[1,3,2];

function getMaxNumber(arr) {
return Math.max.apply(null,arr);
}


console.log(getMaxNumber(array));
