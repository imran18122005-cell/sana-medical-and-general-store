let medicines=[

{
name:"Paracetamol 500mg",
category:"Pain Relief",
price:30
},

{
name:"Crocin Cold Tablet",
category:"Cold",
price:60
},

{
name:"Vitamin C Tablets",
category:"Vitamins",
price:120
},

{
name:"Diabetes Care Tablets",
category:"Diabetes",
price:200
},

{
name:"Pain Relief Gel",
category:"Pain Relief",
price:90
}

];


let cart=[];


function displayProducts(list){

let container=document.getElementById("productContainer");

container.innerHTML="";


list.forEach((medicine,index)=>{


container.innerHTML += `

<div class="card">

<h3>${medicine.name}</h3>

<p>Category: ${medicine.category}</p>

<p>Price: ₹${medicine.price}</p>


<button onclick="addCart(${index})">

Add to Cart

</button>


</div>

`;

});


}



displayProducts(medicines);



function addCart(index){

cart.push(medicines[index]);

showCart();

}



function showCart(){

let box=document.getElementById("cartItems");

box.innerHTML="";


let total=0;


cart.forEach((item,index)=>{


total+=item.price;


box.innerHTML +=`

<p>

${item.name} - ₹${item.price}

<button onclick="removeCart(${index})">
Remove
</button>

</p>


`;

});


document.getElementById("total").innerHTML=total;


}



function removeCart(index){

cart.splice(index,1);

showCart();

}



function searchMedicine(){

let value=document
.getElementById("search")
.value
.toLowerCase();


let result=medicines.filter(item=>

item.name.toLowerCase()
.includes(value)

);


displayProducts(result);

}




function filterCategory(category){


if(category=="All"){

displayProducts(medicines);

}

else{


let result=medicines.filter(item=>

item.category==category

);


displayProducts(result);


}


}




function placeOrder(){


let name=document
.getElementById("customerName")
.value;


alert(
"Thank you "+name+
". Your order request has been received."
);


}




function whatsappOrder(){


let message="Medicine Order:%0A";


cart.forEach(item=>{

message += 
item.name+
" ₹"+
item.price+
"%0A";

});


let phone="91 9399933820";


window.open(

"https://wa.me/"+phone+
"?text="+message

);


}