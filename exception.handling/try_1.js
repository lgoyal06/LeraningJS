function fail() {
    try {
        console.log('this works')
        throw new Error('Oh My God')
    } catch (error) {
        console.log('we have made an oopsie', error)
    } finally {
        console.log('still good')
    return 'response from fail function'
    }
    console.log('No one call me ')
}

fail()