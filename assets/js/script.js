const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hors = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

        if(hors < 10) hors = '0' + hors;
        if(min < 10) min = '0' + min;
        if(seg < 10) seg = '0' + seg;

    horas.textContent = hors;
    minutos.textContent = min;
    segundos.textContent = seg;
})