function receivesAFunction(callback){
    callback();
}

const best = function(){
    console.log("Digimon is better than pokemon.")
}

function returnsANamedFunction(){
    return function printDigimon(){
        console.log("Digimon digital monsters!")
    }
}

function testFunc(){
   return console.log("whee!")
}

function returnsAnAnonymousFunction(){

    return function() {
        best();
    }

} 