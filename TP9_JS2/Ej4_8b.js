function oculto1(){
    div=document.getElementById("neu");
    nom=document.getElementById("titlneu")
    if (onclick=true){
        div.style.display='none';
        nom.style.textDecoration='underline';
    }
}
function oculto2(){
    div=document.getElementById("rio");
    nom=document.getElementById("titlrio")
    if (onclick=true){
        div.style.display='none';
        nom.style.textDecoration='underline';
    }
}
function oculto3(){
    div=document.getElementById("ba");
    nom=document.getElementById("titlba")
    if (onclick=true){
        div.style.display='none';
        nom.style.textDecoration='underline';
    }
}

function vista(){
    ver=document.getElementsByName("prov");
    for(var i=0;i<ver.length;i++){
        if ((onclick=true)){
            ver[i].style.display='block';
            nom.style.textDecoration='none';
        }
    }
}