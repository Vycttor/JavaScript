function carregar(){
    //variaveis
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    //variavel de teste para diferentes horas do dia.
    //let hora = 7
    msg.innerHTML = `Agora são ${hora} horas`

    //Condição
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#b85f2b'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#1e4d47'
    } else {
        //Boa noite
        img.src = 'imagens/noite-tokyo.png'
        document.body.style.background = '#17032d'
    }//If carregar
}//carregar