function primos(){
    var $primo, $div;
    $div=document.getElementById("div");
    
   for (let $i=2;$i<100; $i++){
    var  $val=2;
    $primo=true;
       while(($primo)&&($val<$i)){ //que necesidad de meterle dos repetitivas profe
           if(($i%$val)==0){
               $primo=false;
           }
           else{
               $val++;
           }
       }
       if($primo){
           $div.innerHTML+=($i + " ")
       }
       
   }
}