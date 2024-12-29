let msginput=document.getElementById("msginput");
let sendmsgbtn=document.getElementById("sendmsgbtn");
console.log(sendmsgbtn)

const now = new Date();
const timeString = now.toLocaleTimeString();
console.log(timeString); // Outputs the current time in a readable format, e.g., "10:30:15 AM"

const currentDate = new Date().toString();
let dateonly=currentDate.slice(4,10);
let year=currentDate.slice(11,15);
console.log(year)



let chatcontainer=document.getElementById("chatcontainer");
function crateusermsg(inputvalue){
    let div=document.createElement("div")
    div.classList.add("user-msg-container");
    let p=document.createElement("p");
    p.innerHTML=inputvalue
    div.appendChild(p);
    let img=document.createElement("img");
    img.src="https://cdn3.iconfinder.com/data/icons/concious-living-and-personality-traits-3/512/378_Basic_Chatting_User-512.png"
    div.appendChild(img);
    chatcontainer.appendChild(div);


}

sendmsgbtn.onclick=function(){
    let inputvalue=msginput.value;
    if(inputvalue==""){
        alert("please enter a valid input ")
        return;
    }


    crateusermsg(inputvalue)
    msgfromchatbot()
    
    msginput.value="";
}

function chat(){
    let msgvalue=msginput.value;
   let output=""
   let redingmsgfromuser=msgvalue.toLowerCase();
   console.log(redingmsgfromuser)
if(redingmsgfromuser.includes("hi")||redingmsgfromuser.includes("hello")){
    output="Hi"
}
else if(redingmsgfromuser.includes("good morning")||redingmsgfromuser.includes("gm")){
    output="Good morning";

}
else if(redingmsgfromuser.includes("good afternoon")||redingmsgfromuser.includes("good afternoon")){
    output="Good Afternoon";

}
else if(redingmsgfromuser.includes("good night")||redingmsgfromuser.includes("gn")){
    output="Good Night";

}
else if(redingmsgfromuser.includes("present time")||redingmsgfromuser.includes("timenow")||redingmsgfromuser.includes("time")||redingmsgfromuser.includes("presenttime")){
    output=timeString

}
else if(redingmsgfromuser.includes("present date")||redingmsgfromuser.includes("presentdate")||redingmsgfromuser.includes("date")){
    output=dateonly;

}
else if(redingmsgfromuser.includes("month")||redingmsgfromuser.includes("presentmonth")||redingmsgfromuser.includes("present month")||redingmsgfromuser.includes("present year")||redingmsgfromuser.includes("year")){
    output=dateonly+ " "+year;

}
else if(redingmsgfromuser.includes("how are you?")||redingmsgfromuser.includes("howareyou?")){
    output="I'm fine thank's for asking you"

}
else if(redingmsgfromuser.includes("what is your name?")||redingmsgfromuser.includes("your name")){
    output="My name is Jarvi's Im a chatbot"

}
else if(redingmsgfromuser.includes("what are you doing?")||redingmsgfromuser.includes("why are you here ")){
    output="I'm here for you assist you "

}
else{
    output="I'm unable to understand thank's for reaching out "

}
return output;
}



function msgfromchatbot(){

    let getvalue=chat()
    let divofchat=document.createElement("div");
    divofchat.classList.add("chatbot-msg-container");
    let chatimg=document.createElement("img");
    chatimg.src="https://th.bing.com/th/id/OIP.AjDK5wuMMMDCsVnvEMKiBgHaHa?rs=1&pid=ImgDetMain"
    divofchat.appendChild(chatimg);
    let pfromchat=document.createElement("p");
    divofchat.appendChild(pfromchat);
    pfromchat.innerHTML=getvalue
    chatcontainer.appendChild(divofchat);

}