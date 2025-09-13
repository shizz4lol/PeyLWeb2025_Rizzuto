function valorSeleccionado(valor){
    if(valor<0){
        document.write("-1");
    }
    else if ((valor>=0)&&(valor<10)){
        document.write("0");
    }
    else if ((valor>=10)&&(valor<50)){
        document.write("1");
    }
    else if ((valor>=50)&&(valor<100)){
        document.write("2");
    }
    else if ((valor>=100)){
        document.write("3");
    }
}