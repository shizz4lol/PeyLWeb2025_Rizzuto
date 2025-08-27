function datos_prompt(){
nom=prompt("Ingrese su nombre","Nombre");
ape=prompt("Ingrese su apellido","Apellido");
fecha=prompt("Ingrese su fecha de nacimiento","Fecha");
edad=prompt("Ingrese edad","Edad");
dni=prompt("Ingrese numero de DNI","DNI");
confirm("Sus datos seran mostrados :P")
document.write("Nombre: "+ nom+"<br>");
document.write("Apellido: "+ape+"<br>");
document.write("Fecha de nacimiento: "+fecha+"<br>");
document.write("Edad: "+edad+"<br>");
document.write("DNI: "+dni+"<br>");
}
datos_prompt();
alert("Sus datos seran impresos :D");