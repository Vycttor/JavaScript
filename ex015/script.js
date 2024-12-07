function verificar(){    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}` // Teste de Funcionalidade.
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/criança-m.png')

            } else if(idade < 21){
                // jovem
                img.setAttribute('src','imagens/adolecente-m.png')

            } else if (idade < 50){
                // adulto
                img.setAttribute('src','imagens/adulto-m.png')

            } else {
                // idoso
                img.setAttribute('src','imagens/idoso-m.png')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/criança-f.png')

            } else if(idade < 21){
                // jovem
                img.setAttribute('src','imagens/adolecente-f.png')

            } else if (idade < 50){
                // adulto
                img.setAttribute('src','imagens/adulto-f.png')

            } else {
                // idoso
                img.setAttribute('src','imagens/idosa-f.png')
            }

        } // Else if
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

        
    }


}//fuctiom

