// Aprendendo condições compostas em JavaScript.

/*
var idade = 22
if (idade < 18){
    console.log('Menor de idade')
}else{
    console.log('Maior de idade')
} */

var idade = 22

console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não volta')
}else if (idade < 18 || idade > 65){
    console.log('Voto opicional')
}else {
    console.log('Voto obigatório')
}

