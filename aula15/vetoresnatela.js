//Aprendendo vetores

let valores = [1, 43, 8, 6, 9, 2, 3, 7]
valores.sort()


//Condição abaixo percorre os os indicices da array, mostrando a posição de cada elemento.
/*
for(let pos=0; pos < valores.length; pos = pos + 1){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}
    */

//condição abaixo realiza a mesma coisa, porém o código é simplificado.

for(let pos in valores ){
    console.log(`[${pos}], ${valores[pos]}`)
}

