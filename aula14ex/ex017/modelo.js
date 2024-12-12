function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n =  Number(num.value)
        let cont = 1
        tab.innerHTML = '' //limpa para que sejaa mostrado a próxima tabuada.
         while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont = cont + 1

         } // while
        
    } // if, else...

}//function tabuada