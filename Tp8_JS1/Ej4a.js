function datos_prompt(){
nom=prompt("Ingrese su nombre","Nombre");
ape=prompt("Ingrese su apellido","Apellido");
edad=prompt("Ingrese edad","Edad");
dni=prompt("Ingrese numero de DNI","DNI");
document.write("Nombre: "+ nom+"<br>");
document.write("Apellido: "+ape+"<br>");
document.write("Edad: "+edad+"<br>");
document.write("DNI: "+dni+"<br>");
}
datos_prompt();
alert("Sus datos han sido impresos :D");