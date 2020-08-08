/*Most Important Feature*/
const promisify = (item, delay) =>
    new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 500);
const b = () => promisify('b', 1000);
const c = () => promisify('c', 10);

async function sequence() {
    var output_1 = await a()
    var output_2 = await b()
    var output_3 = await c()
    return `Sequence is done ${output_1}  ${output_2}  ${output_3}`
}

async function parallel() {
    var promises = [a(), b(), c()]
    const [output_1, output_2, output_3] = await Promise.all(promises);
    return `parallel is done ${output_1}  ${output_2}  ${output_3}`
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}

var start = new Date().getTime();
sequence().then((data) => {
    var end = new Date().getTime();
    var time = end - start;
    console.log(data)
    console.log(time)
})

var start1 = new Date().getTime();
parallel().then((data) => {
    var end1 = new Date().getTime();
    var time1 = end1 - start1;
    console.log(data)
    console.log(time1)
})


var start2 = new Date().getTime();
race().then((data) => {
    var end2 = new Date().getTime();
    var time2 = end2 - start2;
    console.log(data)
    console.log(time2)
})
