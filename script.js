function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // BOM DIA! 
        foto.src = 'img/manha.jpg'
        document.body.style.background = '#FAE3CC'
    }else if(hora >= 12 && hora < 18){
        // BOA TARDE!
        foto.src = 'img/tarde.jpg'
        document.body.style.background = '#FA8859'
    }else{
        //BOA NOITE!
        foto.src = 'img/noite.jpg'
        document.body.style.background = '#FA5D51'

    }
}
