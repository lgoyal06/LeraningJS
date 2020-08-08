const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked')
    } else {
        reject('Error, it broke')
    }
})

promise.then(result => console.log(result))

promise.then(result => {
    throw  Error
    result + '!'
})
    .then(result2 => console.log(result2))
    .catch(() => console.log('error!'))
    .then(resutl3 => console.log(resutl3 + '1'))