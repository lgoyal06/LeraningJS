Promise.resolve('asyncfail').then(response => {
    Promise.resolve().then(() => {
        throw new Error('#3 fails')
    }).catch(e => {
        console.log(e)
    })
    return 5
}).then(response => {
    console.log(response)
}).catch(err => {
    console.log('final error')
})