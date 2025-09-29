function impri(){
    f=new Date();
    chat=document.getElementById("text");
    v=document.getElementById("mostrar");
    nom=document.getElementById("nom");
    v.innerHTML+=  f.getDate()+"/"+f.getMonth() +"/"+f.getFullYear() + " "+ f.getHours()+ ":"+f.getMinutes()
    +":"+f.getSeconds() + " por "+ nom.value +"<br>";
    v.innerHTML+= chat.value + "<br>";
}
function borrar(id){
    input=document.getElementById(id);
    if (input.value!=""){
        input.value="";
        input.focus();
    }
}