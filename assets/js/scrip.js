const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    let day = dateToday.getDay();
    let mon = dateToday.getMonth();
    let yr = dateToday.getFullYear();

    if (hrs < 10) hrs = "0" + hrs;

    if (min < 10) min = "0" + min;

    if (sec < 10) sec = "0" + sec;

    if (day < 10) day = "0" + day;

    if (mon < 10) mon = "0" + mon;

    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = sec;

    dia.textContent = day;
    mes.textContent = mon;
    ano.textContent = yr;
});
