//Synchronous Try catch block
try {
    try{
        something();
    } catch(e){
        throw new Error(e)
    }
}catch(e){
    console.log('got it', e)
}