let hoursInput=document.getElementById("hoursInput");
let minutesInput=document.getElementById("minutesInput");
let convertBtn=document.getElementById("convertBtn");
let timeInSeconds=document.getElementById("timeInSeconds");

function changeintoseconds(){
    let hours=hoursInput.value;
    let minutes=minutesInput.value;
    let valueone=parseInt(hours);
    let valuetwo=parseInt(minutes); 
    if(hoursInput.value===""){
        alert("please enter a valid input");
         return;
    }
    if(minutesInput.value===""){
        alert("please enter a valid input");
        return;
    }
    else{
       
        let min=valueone*3600+valuetwo*60;
        timeInSeconds.textContent=min+" seconds";
    }
}
convertBtn.addEventListener("click",changeintoseconds);