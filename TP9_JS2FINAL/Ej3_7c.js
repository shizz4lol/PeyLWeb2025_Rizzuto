function funcion(x){
    var x, res;
    res=(3*x)+(5-(Math.pow(x,2)));
    return res;
}
function cien(){
    var caja, calc;
    caja = document.getElementById('100');
    for (var i=0; i<100; i++) {
        calc=funcion(parseInt(i));
        caja.innerHTML+= (" "+calc);
    }
}
