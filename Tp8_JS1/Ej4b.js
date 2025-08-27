
n1=prompt("Ingrese numero 1:");
n2=prompt("Ingrese numero 2");
calculos(n1, n2);

function calculos(n1,n2){
    var suma=parseInt(n1)+parseInt(n2);
    var resta=n1-n2;
    var multi=n1*n2;
    var div=n1/n2;
    document.write("Suma: "+suma+ " <br>");
    document.write("Resta: "+resta+ " <br>");
    document.write("Multiplicacion: "+multi+ " <br>");
    document.write("Division: "+div+ " <br>");
}

