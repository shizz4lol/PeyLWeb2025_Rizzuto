function calc(){
    pa=document.getElementById("res");
    hoy= new Date();
    a=hoy.getFullYear();
    au=prompt("Ingrese año de nacimiento:  ")
    edad=a-au;
    pa.innerHTML+="La edad es: "+edad;
}
