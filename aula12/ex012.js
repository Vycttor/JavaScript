// Aprendendo condições, em JavaScript

var agora = new Date() // new date, permite pegar a hora atual e atribuir a uma variavel, como segue a declaração.
var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

if (hora < 12){
    console.log('Bom dia')
} else if (hora <= 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}