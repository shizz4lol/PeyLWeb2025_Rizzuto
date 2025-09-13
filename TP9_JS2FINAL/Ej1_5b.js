function dolar_peso(){
    var peso=1361.37,dolar;
    dolar=prompt("Ingrese cantidad de dolares:","$0");
    en_p=dolar*peso;
    salida=document.getElementById("salida");
    salida.value="Serian $"+en_p+" pesos.";
}
function peso_dolar(){
    var dolar=0.00074,peso;
    peso=prompt("Ingrese cantidad de pesos: ","$0");
    en_d=peso*dolar;
    salida=document.getElementById("salida");
    salida.value="Serian $"+en_d+" dolares.";
}
function peso_real(){
    var real=248,peso;
    peso=prompt("Ingrese cantidad de pesos: ","$0");
    en_r=peso*real;
    salida=document.getElementById("salida");
    salida.value="Serian $"+en_r+" reales.";
}

function peso_euro(){
    var euro=0.00063,peso;
    peso=prompt("Ingrese cantidad de pesos: ","$0");
    en_e=peso*euro;
    salida=document.getElementById("salida");
    salida.value="Serian $"+en_e+" euros.";
}
function real_peso(){
    var peso=0.004,real;
    real=prompt("Ingrese cantidad de reales: ","$0");
    en_p=real/peso;
    salida=document.getElementById("salida");
    salida.value="Serian $"+en_p+" pesos.";
}
function euro_peso(){
    var peso=1587.18,euro;
    euro=prompt("Ingrese cantidad de euros: ","$0");
    en_p=euro*peso;
    salida=document.getElementById("salida");
    salida.value="Serian $"+en_p+" pesos.";
}
