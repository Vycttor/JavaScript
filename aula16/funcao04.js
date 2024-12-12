// Fatorial 

function fatorial(valor){
    let fat = 1
    for(let cont = valor; cont > 1; cont = cont - 1){
        fat = fat * cont
        
    }
    return fat
}

console.log(fatorial(5))