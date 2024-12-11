function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //condição for, laço de repetição.
        // var c passa a ser ir, para auxiliar na contagem.
        if(i < f){
            //contagem crescente.
            for(var c = i; c <= f; c = c + p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }//For
           
        } else {
            //contagem regressiva.
            // Nesse for, caso o inicio seja maior, será feito uma decrementação de valores, contanto do maior para o menor.
            for(var c = i; c >= f; c = c - p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }//For
        }// If, else contendo os dois for....
        res.innerHTML += `\u{1F3C1}` //emoji bandeira (flag)
    }//If, else


}//function contar
