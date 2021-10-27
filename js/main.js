//selecting require elemnts by query selector

let customerName = document.querySelector("#customer-name");
let errMessage=document.querySelectorAll(".message");
let type=document.querySelector(".type");
let count=document.querySelector("#count");
let deliveryTime=document.querySelector(".delivery-time");
let allergies=document.querySelector(".allergies");
let customerNmeWel=document.querySelector(".customerNameWel");
let table=document.querySelector("#cupcake-table")


var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];
//take inputs values
let customerNameValue = customerName.value;

//save customer name in local storage
//select require buttons
let submitBtn = document.querySelector(".submit-btn");
let showBtn = document.querySelector(".show-btn");

//shoe table 

  show_cupcakes(cup_cakes);
function show_cupcakes() {
for (let i = 0; i < cup_cakes.length; i++) {
  let tableBody=`<tr>
  <td>${cup_cakes[i].name}</td>
  <td calss="${cup_cakes[i].calories}">${cup_cakes[i].calories}</td>
  <td>${cup_cakes[i].weight}</td>
  </tr>
  `
  table.insertAdjacentHTML("beforeend",tableBody)
} 
}

//write code that validates the form
function validate() {
  if(customerName.value.length < 5){
    errMessage[0].innerHTML = "customer name should be 5 charecter at least "
}else if (customerName.value.length >15){
    errMessage[0].innerHTML = "customer name should be 15 charecter long "
}
else{
  localStorage.setItem("cusomerName",customerName.value);
    errMessage[0].innerHTML = ""
}

if(count.value <1){

    errMessage[1].innerHTML = "please add value "
}
else{
    errMessage[1].innerHTML = ""
}

   if(type.value ==="None"){
    errMessage[2].innerHTML = "choose on of the options plaese "
   }else{
     if(type.value=="Chocolate" && deliveryTime.value ==="4:00 PM" ){
      errMessage[2].innerHTML = "No chocolate delivery at 4 pm "
     }else if(type.value=="Chocolate" && allergies.value ==="Dairy Free" ){
      errMessage[2].innerHTML = "No chocolate with dairy free"
     }else if(type.value=="Pecan" && allergies.value ==="Nut Free" ){
      errMessage[2].innerHTML = "No pecan with nut free"
     }
     else{ 
       errMessage[2].innerHTML = "";
    }
   }

   if(deliveryTime.value ==="None"){
    errMessage[3].innerHTML = "choose on of the options plaese "
   }else{
    errMessage[3].innerHTML = "";
   }

 if(allergies.value ==="None"){
    errMessage[4].innerHTML = "choose on of the options plaese "
   }else{
    errMessage[4].innerHTML = "";
   }

}


//add eventListener to submit bntton
submitBtn.addEventListener('click', (e) => {
 e.preventDefault();
  validate();

});
showBtn.addEventListener('click', (e) => {
  e.preventDefault();
  customerNmeWel.innerHTML=localStorage.getItem("cusomerName")
 
 });
