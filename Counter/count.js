let value=document.getElementById("value");
let count=parseInt(0)
function increase(){
    count=count+1;
    value.textContent=count;
    if(count>0){
        value.style.color="green";
    }
    if(count<0){
        value.style.color="red";
    }
   if(count===0){
    value.style.color="black";
   }
}
function reset(){
    value.textContent=0;
    value.style.color="black";
    
}
function decrease(){
    count=count-1;
    value.textContent=count;
    if(count>0){
        value.style.color="green";
    }
    if(count<0){
        value.style.color="red";
    }
    if(count===0){
        value.style.color="black";
       }
}