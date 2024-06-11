function greet(name){
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callbackFn){
    const name ="Nishan";
    callbackFn(name)
}

higherOrderFunction(greet);