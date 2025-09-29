function mostrar(){
    div=document.getElementById("hoy");
    hoy(div);
    navidad(div);
}
function hoy(div){
    var d = new Date();
    div.innerHTML+="La fecha actual es: " +d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear() + "<br>";
    div.innerHTML+="Hora/Minutos/Segundos: "+d.getHours()+"/"+d.getMinutes() +"/"+d.getSeconds() +"<br>";
}
function navidad(div){
    var hoy= new Date();
    var nav= new Date(hoy.getFullYear(),11,25);
    var s=1000;
    var m=s*60; 
    var h=m*60;
    var d=h*24;
    var diferencia=nav-hoy;
    if (hoy.getMonth()==11 && hoy.getDate()>25) {
        nav.setFullYear(nav.getFullYear()+1) ;
    }
    dias = Math.floor(diferencia/d);
    horas = Math.floor((diferencia%d)/h);
    minutos = Math.floor((diferencia%h)/m);
    segundos = Math.floor((diferencia%m)/s);
    div.innerHTML+="Faltan: "+dias+"d "+horas+"h "+minutos+"m "+segundos+"s para NAVIDAD <br>";
}