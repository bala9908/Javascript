let input=document.getElementById("input")
let icon=document.getElementById("icon");
let maincontainer=document.querySelector(".main-container");
input.addEventListener("keyup",getdata);
function getdata(){
    let value=input.value
   let url=`https://restcountries.com/v3.1/name/${value}`
   console.log(url)
   let options={
   method:"GET"
   }

   fetch(url,options)
   .then(function(data){
    return data.json()
   })
   .then(function(datavalue){
    
    let datastore=datavalue
    console.log(datastore)
    displayresults(datastore)
   })
   .catch(function(error){
    console.log(error)
    
   })
}

function displayresults(a){
    let display=""
    for(let i=0;i<a.length;i++){
        let capital = a[i].capital ? a[i].capital[0] : "N/A"
        display+=`<div class="card">
               <img src="${a[i].flags.png}"/>
               <h3>${a[i].name.common}</h3>
               <p>Capital:${capital}</p>
               <p>Population:${a[i].population}</p>
              <p>Area:${a[i].area}</p>
           
            </div>`
    }
    maincontainer.innerHTML=display

}


// let input = document.getElementById("input");
// let icon = document.getElementById("icon");
// let maincontainer = document.querySelector(".main-container");

// input.addEventListener("keyup", getdata);

// function getdata() {
//     let value = input.value.trim();
//     if (!value) return; // Prevent empty API calls

//     let url = `https://restcountries.com/v3.1/name/${value}`;
//     console.log("Fetching URL:", url);

//     let options = {
//         method: "GET",
//     };

//     fetch(url, options)
//         .then(function (response) {
//             // if (!response.ok) {
//             //     throw new Error(`HTTP error! Status: ${response.status}`);
//             // }
//             return response.json();
//         })
//         .then(function (datavalue) {
//             console.log("Fetched Data:", datavalue);
//             displayresults(datavalue);
//         })
//         .catch(function (error) {
//             console.error("Error fetching data:", error);
//         });
// }

// function displayresults(data) {
//     let display = "";

//     for (let i = 0; i < data.length; i++) {
//         let country = data[i];
//         // let capital = country.capital ? country.capital[0] : "N/A";
//         // let currencies = country.currencies
//         //     ? Object.values(country.currencies).map((c) => c.symbol).join(", ")
//         //     : "N/A";
//         // let population = country.population.toLocaleString();

//         display += `
//             <div class="card">
//                 <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
//                 <h3>${country.name.common}</h3>
//                 <p>Capital: ${country.capital[0]}</p>
//                 <p>Population:${country.population}</p>
                
//             </div>`;
//     }

//     maincontainer.innerHTML = display;
// }
