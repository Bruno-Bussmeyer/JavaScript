(function carregar (){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()




    if(hora >= 0 && hora < 4){
        //Madrugada
        img.src = "img/madrugada.png"
        document.body.style.background = '#463525'
        
    }
    else if (hora >=4 && hora <6) {
        //Amanheceu
        img.src = "img/amanhecer.png"
        document.body.style.background = '#74aae8'
    }
    else if (hora >=6 && hora< 12){
        //Bom dia
        img.src = "img/manha.png"
        document.body.style.background = '#ebebe8'
    }
    else if (hora >=6 && hora <18){
        //Tarde
        img.src = "img/tarde.png"
        document.body.style.background = '#4e99b1'
    }
    else{
        //Noite
        img.src = "img/noite.png"
        document.body.style.background = '#2a1e2a'
        
    }

})()


const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval (function time(){       
        let dateToday = new Date();

        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let s = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
