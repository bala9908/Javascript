
let mobile_details=[
    {   id:1,
        name:"Realme 7",
        price:15000,
        brand:"Realme",
        storage:64,
        ram:6

    },
    {   id:2,
        name:"Samusung S22",
        price:150000,
        brand:"Samusung",
        storage:128,
        ram:8

    },
    { 
        id:3,
        name:"Iphone 16",
         price:150000,
        brand:"Apple",
        storage:128,
        ram:6

    },
    {
        id:4,
        name:"Realmex",
        price:18000,
        brand:"Realme",
        storage:64,
        ram:6

    },
]


// console.log(mobilecontainer);

function showmobiles(){
    let mobilecontainer=document.getElementById("body")
    let mobilesvalue=""
    for(i=0;i<mobile_details.length;i++){
        mobilesvalue+= `<tr id=${mobile_details[i].id}>
        <td>${mobile_details[i].name}</td>
        <td>${mobile_details[i].price}</td>
        <td>${mobile_details[i].brand}</td>
        <td>${mobile_details[i].storage}</td>
          <td>${mobile_details[i].ram}</td>
        <td><button class="btn btn-warning" onclick=editmobile(event)>Edit</button></td>
        <td><button class="btn btn-danger" onclick=deletemobile(event)>Delete</button></td>
</tr> `
       
    }
    mobilecontainer.innerHTML=mobilesvalue
}
showmobiles()


let addbtn=document.getElementById("add")
let form=document.getElementById("form")

addbtn.onclick=function openform(){
    form.classList.toggle("form-visible")
    resetform()

}



// addbtn.addEventListener("click",()=>{
    
//     form.classList.toggle("form-visible")
// })
let cancelbtn=document.querySelector(".cancel")
cancelbtn.onclick=function camcel(){
    form.classList.toggle("form-visible")
}

let nameinput=document.getElementById("name");
let priceinput=document.getElementById("price");
let brandinput=document.getElementById("brand");
let storageinput=document.getElementById("storage");
let raminput=document.getElementById("ram");



function editform(mobile){
    
    let namevalue= mobile.name
    let pricevalue=mobile.price
    let brandvalue= mobile.brand
    let storgevalue= mobile.storage
    let ramvalue= mobile.ram

    form.classList.toggle("form-visible");

    nameinput.value=namevalue
    priceinput.value=pricevalue
    brandinput.value=brandvalue
    storageinput.value=storgevalue
    raminput.value=ramvalue

}



let currentEditId=null

function editmobile(event){
    let targetvaue=event.target.parentElement.parentElement.id
    currentEditId=targetvaue
    for(i=0;i<mobile_details.length;i++){
        if(currentEditId==mobile_details[i].id){
          console.log(mobile_details[i].id)
          let mobileeditvalue=mobile_details[i]
          console.log(mobileeditvalue)
          editform(mobileeditvalue)
        }
    }

    return  targetvaue
}

function resetform(){
    nameinput.value=""
    priceinput.value=""
    brandinput.value=""
    storageinput.value=""
    raminput.value=""
}


let length=mobile_details.length

let savebtn=document.querySelector(".save")
savebtn.onclick = function save() {
    let namevalue = nameinput.value;
    let pricevalue = parseFloat(priceinput.value);
    let brandvalue = brandinput.value;
    let storagevalue = parseInt(storageinput.value);
    let ramvalue = parseInt(raminput.value);

    if (currentEditId) {
        // Edit existing mobile
        let mobile = mobile_details.find((mobile) => mobile.id == currentEditId);
        if (mobile) {
            mobile.name = namevalue;
            mobile.price = pricevalue;
            mobile.brand = brandvalue;
            mobile.storage = storagevalue;
            mobile.ram = ramvalue;
        }
        currentEditId = null; // Reset currentEditId after editing
    } else {
        // Add new mobile
        let newMobile = {
            id: mobile_details.length + 1,
            name: namevalue,
            price: pricevalue,
            brand: brandvalue,
            storage: storagevalue,
            ram: ramvalue,
        };
        mobile_details.push(newMobile);
    }

    resetform();
    form.classList.toggle("form-visible");
    showmobiles(); // Refresh the table to display updated or new data
};



// savebtn.onclick=function save(new_target){
   
   
//     let namevalue= nameinput.value
//     let pricevalue=parseInt(priceinput.value)
//     let brandvalue= brandinput.value
//     let storgevalue= parseInt(storageinput.value)
//     let ramvalue= parseInt(raminput.value)

//     console.log(new_target)
    
    
   
    

// }




function deletemobile(event){
    let targetvaue=event.target.parentElement.parentElement
    let idvalue=targetvaue.id
    for(i=0;i<mobile_details.length;i++){
        if(idvalue==mobile_details[i].id){
         mobile_details.splice(i,1);
        }
       
    }
    showmobiles()
}

 


let savechange=document.getElementById("savechange")
savechange.onclick=function(b){
   localStorage.setItem("mobile",JSON.stringify(mobile_details))
   getfromstorage()
   console.log(mobile_details)
}

function getfromstorage(){
    let a=localStorage.getItem("mobile")
    if(a){
        mobile_details=JSON.parse(a)
        console.log(mobile_details)
        showmobiles()
    }
}





// let mobile_details = [
//     { id: 1, name: "Realme 7", price: 15000, brand: "Realme", storage: 64, ram: 6 },
//     { id: 2, name: "Samsung S22", price: 150000, brand: "Samsung", storage: 128, ram: 8 },
//     { id: 3, name: "Iphone 16", price: 150000, brand: "Apple", storage: 128, ram: 6 },
//     { id: 4, name: "Realmex", price: 18000, brand: "Realme", storage: 64, ram: 6 },
// ];

// // Function to display the list of mobiles
// function showmobiles() {
//     let mobilecontainer = document.getElementById("body");
//     let mobilesvalue = "";
//     for (let i = 0; i < mobile_details.length; i++) {
//         mobilesvalue += `<tr id=${mobile_details[i].id}>
//             <td>${mobile_details[i].name}</td>
//             <td>${mobile_details[i].price}</td>
//             <td>${mobile_details[i].brand}</td>
//             <td>${mobile_details[i].storage}</td>
//             <td>${mobile_details[i].ram}</td>
//             <td><button class="btn btn-warning" onclick="editmobile(event)">Edit</button></td>
//             <td><button class="btn btn-danger" onclick="deletemobile(event)">Delete</button></td>
//         </tr>`;
//     }
//     mobilecontainer.innerHTML = mobilesvalue;
// }
// showmobiles();

// // Show/Hide Form
// let addbtn = document.getElementById("add");
// let form = document.getElementById("form");
// addbtn.onclick = function openform() {
//     form.classList.toggle("form-visible");
// };

// // Cancel Button
// let cancelbtn = document.querySelector(".cancel");
// cancelbtn.onclick = function () {
//     resetForm();
//     form.classList.toggle("form-visible");
// };

// // Input Fields
// let nameinput = document.getElementById("name");
// let priceinput = document.getElementById("price");
// let brandinput = document.getElementById("brand");
// let storageinput = document.getElementById("storage");
// let raminput = document.getElementById("ram");

// // Variable to store the current editing ID
// let currentEditId = null;

// // Function to open form and populate fields for editing
// function editform(mobile) {
//     form.classList.add("form-visible");
//     nameinput.value = mobile.name;
//     priceinput.value = mobile.price;
//     brandinput.value = mobile.brand;
//     storageinput.value = mobile.storage;
//     raminput.value = mobile.ram;
// }

// // Function to edit a mobile
// function editmobile(event) {
//     let targetId = event.target.parentElement.parentElement.id;
//     currentEditId = targetId;
//     let mobile = mobile_details.find((mobile) => mobile.id == targetId);
//     if (mobile) {
//         editform(mobile);
//     }
// }

// // Save Button Functionality
// let savebtn = document.querySelector(".save");


// // Delete Mobile
// function deletemobile(event) {
//     let targetId = event.target.parentElement.parentElement.id;
//     mobile_details = mobile_details.filter((mobile) => mobile.id != targetId);
//     console.log(mobile_details)
//     showmobiles();
// }

// // Function to reset form fields
// function resetForm() {
//     nameinput.value = "";
//     priceinput.value = "";
//     brandinput.value = "";
//     storageinput.value = "";
//     raminput.value = "";
// }
