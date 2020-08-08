(async function () {
        try {
            await Promise.reject('oopsie')
        } catch (e) {
            console.log(e)
        }
        console.log('is this still god?')
    }
)()