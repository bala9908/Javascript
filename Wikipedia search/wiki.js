let input=document.getElementById("input");
let searchresult=document.getElementById("searchresult");


function cratesearchresult(result){
let value=result//result is object the object is assigned to value this object contains{title:"name",link:"linkvalue",description:"description matter"}
let div=document.createElement("div");
searchresult.appendChild(div);
div.classList.add("mb-3","ml-3");   


let titleelement=document.createElement("a");
titleelement.textContent=value.title;
titleelement.href=value.link;
div.appendChild(titleelement);
titleelement.target="_blank";
titleelement.classList.add("title");

let breake1=document.createElement("br");
titleelement.appendChild(breake1);

let linkelement=document.createElement("a");
linkelement.textContent=value.link;
linkelement.href=value.link;
linkelement.target="_blank";
div.appendChild(linkelement);
linkelement.classList.add("link");

let breake2=document.createElement("br");
linkelement.appendChild(breake2);

let descriptionelement=document.createElement("p");
descriptionelement.textContent=value.description;
div.appendChild(descriptionelement);
descriptionelement.classList.add("description")

}

function displaysearch(search_results){
    for(let result of search_results){ //  in for loop itterates all search_results objects
    cratesearchresult(result); // cratesearchresult is an function result is a search_results object every iteration
    console.log(result);
    }
}


function getfromwebsite(event){ //browser create an event object so we can access event object  by  simple passing an event object 
    if(event.key==="Enter"){ //if we press enter then only it will execute 
        searchresult.textContent=""; //after pressing enter the previous serach results is removed 
        let inputvalue=input.value; //we enter the paramenter
        let url="https://apis.ccbp.in/wiki-search?search="+inputvalue;  //add the paramenter to the link;
        let options={
            method:"GET" // we get the information from using GET method 
        }
        fetch(url,options) //we fetch the information from using url and options object 
        .then(function(response){
            return response.json()  // server gives json data
        })
        .then(function(jsonData){
            let {search_results}=jsonData;  // we can take only search_results as an object because it is already decleared  if we any other varible it doesnot give expected results;
            displaysearch(search_results); //it is  displaysearch function we pass search_results as an  argument 
        })
    }

}
input.addEventListener("keydown",getfromwebsite); //addeventlistener to input element