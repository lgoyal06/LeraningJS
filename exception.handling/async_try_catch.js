Promise.resolve('asyncfail').then(response => {
    throw new Error('#1 fail')
    return response
}).then(response => {
    console.log(response)
}).catch(err => {
    //return err
    throw new Error(err)
}).then(res => {
    console.log(res.message)
}).catch(err => {
    console.log('final error')
})