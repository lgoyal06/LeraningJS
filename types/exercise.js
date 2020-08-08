const number = 100
const string = "Jay"
var obj1 = {
    value: "a"
}
var obj2 = {
    value: "b"
}
var obj32 = obj2;

function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    console.log(obj1.value)
    obj2.value = "c";
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code:
console.log(number);
console.log(string);
console.log(obj1.value);