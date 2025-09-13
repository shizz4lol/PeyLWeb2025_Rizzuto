function color1(){
    li=document.getElementById("li1");
    li.style.backgroundColor='white';
}
function color2(){
    li=document.getElementById("li2");
    li.style.backgroundColor='blue';
}
function color3(){
    li=document.getElementById("li3");
    li.style.backgroundColor='red';
}
function color4(){
    li=document.getElementById("li4");
    li.style.backgroundColor='orange';
}
function color5(){
    li=document.getElementById("li5");
    li.style.backgroundColor='pink';
}

function volver(){
    const cole=document.getElementsByTagName("li");
    for (var i=0; i<cole.length;i++){
        if (onmouseout=true){
            cole[i].style.backgroundColor='black';
        }
    }
}