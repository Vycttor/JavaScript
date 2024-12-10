/*console.log('Tudo Bem');
console.log('Tudo Bem');
console.log('Tudo Bem');
console.log('Tudo Bem');
console.log('Tudo Bem');
console.log('Tudo Bem');
console.log('Tudo Bem');*/

// Aprendendo condição de reptição em JavaScript (while)

var cont = 1
var pos = 1

/*
while (cont <= 6){
    console.log(`[${pos}] Tudo bem?`)
    //cont = cont + 1 // Atripuição forma normal.
    cont++ // Atribuição forma simplificada.
    pos++ 
}
console.log(`Fim`)
*/

do{
    console.log(`${pos}`)
    pos = pos + 1
    cont = cont + 1
}while (cont <= 6 )