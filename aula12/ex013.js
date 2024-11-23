//Aprendendo Condições SWITCH

var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
 Em JavaScript, o programa reconhce os dias da semana, seguindo as seguintes posições de 0 a 1.
 */

 console.log(diaSem) // Linha de teste para verificar se estar pegando o dia certo.

 switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunga')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[Erro] Dia Invalido')
        break

 }