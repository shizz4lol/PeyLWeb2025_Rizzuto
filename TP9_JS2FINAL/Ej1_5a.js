function suma(){
    var n1,n2,suma,salida1; 
	n1=prompt('valor1=',0);
	n2=prompt('valor2=',0);
	suma=parseInt(n1)+parseInt(n2);
	salida1=document.getElementById("salida");
	salida1.value+=n1+'+'+n2+'='+suma+'\n';
}
function resta(){
    var n1,n2, resta, salida2;
	n1=prompt('valor1=',0);
	n2=prompt('valor2=',0);
    resta=n1-n2;
    salida2=document.getElementById("salida");
    salida2.value=n1+'-'+n2+'='+resta+"\n";
}
function multiplicacion(){
    var n1,n2, multi, salida3;
	n1=prompt('valor1=',0);
	n2=prompt('valor2=',0);
    multi=n1*n2;
    salida3=document.getElementById("salida");
    salida3.value=n1+'*'+n2+'='+multi+"\n";
}

function division(){
    var n1,n2, divi, salida4;
	n1=prompt('valor1=',0);
	n2=prompt('valor2=',0);
    divi=n1/n2;
    salida4=document.getElementById("salida");
    salida4.value=n1+'/'+n2+'='+divi+"\n";
}
function potencia(){
    var n1,n2, pote, salida5;
	n1=prompt('valor1=',0);
	n2=prompt('valor2=',0);
    pote=Math.pow(n1,n2);
    salida5=document.getElementById("salida");
    salida5.value=n1+'^'+n2+'='+pote+"\n";
}
function cuadrado(){
    var n1,n2, cuadra1,cuadra2, salida6;
	n1=prompt('valor1=',0);
	n2=prompt('valor2=',0);
    cuadra1=n1*n1;
    cuadra2=n2*n2;
    salida6=document.getElementById("salida");
    salida6.value=n1+'^2'+'='+cuadra1+"--"+n2+'^2'+'='+cuadra2+"\n";
}