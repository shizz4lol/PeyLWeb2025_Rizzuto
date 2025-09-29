function mostrar(){
    var pedir;  
    var txt = document.getElementById("texto");
    pedir=prompt("Ingrese mensaje","lol");
    //todo mayusculas
    mayus(pedir,txt);
    //todo minusculas
    min(pedir,txt);
    //solo submensaje posicion 5 largo 10
    submensaje(pedir,txt);
    //mensaje si hay hola
    respuesta(pedir,txt);
    //mensaje sin espacios y sin hola.
    sin(pedir,txt);
    //mensaje en ingles
    ingles(pedir,txt);
}
function mayus(pedir,txt){
    txt.innerHTML += pedir.toUpperCase()+"<br>";
}
function min(pedir,txt){
    txt.innerHTML += pedir.toLowerCase()+"<br>";
}
function submensaje(pedir,txt){
    txt.innerHTML += pedir.substr(5,10)+"<br>";
}
function respuesta(pedir,txt){
    if (pedir.indexOf("hola")!=-1){
        txt.innerHTML+="Hola que tal :D <br>";
    }
}
function sin(pedir,txt){
    if (pedir.indexOf("hola")!=-1){
        pedir= pedir.replace("hola","");
    }
    while (pedir.indexOf(" ")!=-1){
        pedir= pedir.replace(" ","");
    }

    txt.innerHTML+=pedir+"<br>";
}
function ingles(pedir,txt){
    if (pedir.indexOf("hola")!=-1){
        pedir= pedir.replace("hola","hello");
    }
    if (pedir.indexOf("soy")!=-1){
        pedir= pedir.replace("soy","i'm");
    }
    if (pedir.indexOf("nombre")!=-1){
        pedir= pedir.replace("nombre","name");
    }
    txt.innerHTML+=pedir;
}
