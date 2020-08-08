try {
    setTimeout(function () {
        fakevariable;
    }, 1000)
} catch (e) {
    console.log('got it', e)
}