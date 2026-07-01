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
let medicines = [

{name:"Paracetamol 500mg",category:"Pain Relief",price:30,mfd:"01-2025",exp:"01-2028"},
{name:"Crocin Advance",category:"Pain Relief",price:35,mfd:"02-2025",exp:"02-2028"},
{name:"Dolo 650",category:"Pain Relief",price:40,mfd:"03-2025",exp:"03-2028"},
{name:"Ibuprofen 400mg",category:"Pain Relief",price:55,mfd:"01-2025",exp:"01-2028"},
{name:"Aceclofenac",category:"Pain Relief",price:75,mfd:"02-2025",exp:"02-2028"},
{name:"Pain Relief Gel",category:"Pain Relief",price:90,mfd:"01-2025",exp:"01-2028"},
{name:"Volini Spray",category:"Pain Relief",price:180,mfd:"03-2025",exp:"03-2028"},
{name:"Moov Cream",category:"Pain Relief",price:95,mfd:"01-2025",exp:"01-2028"},
{name:"Diclofenac Gel",category:"Pain Relief",price:120,mfd:"02-2025",exp:"02-2028"},
{name:"Combiflam",category:"Pain Relief",price:50,mfd:"04-2025",exp:"04-2028"},

{name:"Crocin Cold Tablet",category:"Cold",price:60,mfd:"01-2025",exp:"01-2028"},
{name:"Sinarest Tablet",category:"Cold",price:80,mfd:"02-2025",exp:"02-2028"},
{name:"Cetirizine",category:"Cold",price:45,mfd:"01-2025",exp:"01-2028"},
{name:"Levocet Tablet",category:"Cold",price:65,mfd:"03-2025",exp:"03-2028"},
{name:"Benadryl Syrup",category:"Cold",price:110,mfd:"01-2025",exp:"01-2028"},
{name:"Ascoril Syrup",category:"Cold",price:125,mfd:"04-2025",exp:"04-2028"},
{name:"Alex Syrup",category:"Cold",price:135,mfd:"02-2025",exp:"02-2028"},
{name:"Vicks VapoRub",category:"Cold",price:170,mfd:"01-2025",exp:"01-2028"},
{name:"Nasal Spray",category:"Cold",price:160,mfd:"03-2025",exp:"03-2028"},
{name:"Steam Capsules",category:"Cold",price:90,mfd:"02-2025",exp:"02-2028"},

{name:"Vitamin C Tablets",category:"Vitamins",price:120,mfd:"01-2025",exp:"01-2028"},
{name:"Vitamin D3",category:"Vitamins",price:180,mfd:"02-2025",exp:"02-2028"},
{name:"Multivitamin Capsules",category:"Vitamins",price:250,mfd:"01-2025",exp:"01-2028"},
{name:"Zinc Tablets",category:"Vitamins",price:150,mfd:"03-2025",exp:"03-2028"},
{name:"Calcium Tablets",category:"Vitamins",price:190,mfd:"01-2025",exp:"01-2028"},
{name:"Iron Tablets",category:"Vitamins",price:130,mfd:"02-2025",exp:"02-2028"},
{name:"Vitamin B Complex",category:"Vitamins",price:145,mfd:"01-2025",exp:"01-2028"},
{name:"Omega 3 Capsules",category:"Vitamins",price:350,mfd:"04-2025",exp:"04-2028"},
{name:"Protein Powder",category:"Vitamins",price:850,mfd:"01-2025",exp:"01-2027"},
{name:"Electral Powder",category:"Vitamins",price:25,mfd:"02-2025",exp:"02-2028"},

{name:"Diabetes Care Tablets",category:"Diabetes",price:200,mfd:"01-2025",exp:"01-2028"},
{name:"Metformin 500mg",category:"Diabetes",price:95,mfd:"03-2025",exp:"03-2028"},
{name:"Metformin 1000mg",category:"Diabetes",price:140,mfd:"02-2025",exp:"02-2028"},
{name:"Glimipride",category:"Diabetes",price:110,mfd:"01-2025",exp:"01-2028"},
{name:"Glycomet GP",category:"Diabetes",price:170,mfd:"04-2025",exp:"04-2028"},
{name:"Insulin Pen",category:"Diabetes",price:650,mfd:"01-2025",exp:"01-2027"},
{name:"Accu Sugar Test Strips",category:"Diabetes",price:780,mfd:"02-2025",exp:"02-2027"},
{name:"Sugar Check Machine",category:"Diabetes",price:950,mfd:"03-2025",exp:"03-2028"},
{name:"Diabetic Protein",category:"Diabetes",price:650,mfd:"01-2025",exp:"01-2027"},
{name:"Sugar Balance Capsules",category:"Diabetes",price:420,mfd:"02-2025",exp:"02-2028"},

{name:"Pantoprazole",category:"Digestive",price:85,mfd:"01-2025",exp:"01-2028"},
{name:"Omeprazole",category:"Digestive",price:70,mfd:"02-2025",exp:"02-2028"},
{name:"Gelusil",category:"Digestive",price:95,mfd:"03-2025",exp:"03-2028"},
{name:"ENO",category:"Digestive",price:20,mfd:"01-2025",exp:"01-2028"},
{name:"Digene Syrup",category:"Digestive",price:140,mfd:"02-2025",exp:"02-2028"},
{name:"ORS Powder",category:"Digestive",price:30,mfd:"04-2025",exp:"04-2028"},
{name:"Loperamide",category:"Digestive",price:55,mfd:"01-2025",exp:"01-2028"},
{name:"Lactulose Syrup",category:"Digestive",price:180,mfd:"02-2025",exp:"02-2028"},
{name:"Probiotic Capsules",category:"Digestive",price:220,mfd:"01-2025",exp:"01-2028"},
{name:"Antacid Tablets",category:"Digestive",price:60,mfd:"03-2025",exp:"03-2028"},

{name:"Amoxicillin",category:"Antibiotic",price:180,mfd:"01-2025",exp:"01-2028"},
{name:"Azithromycin",category:"Antibiotic",price:220,mfd:"02-2025",exp:"02-2028"},
{name:"Cefixime",category:"Antibiotic",price:260,mfd:"01-2025",exp:"01-2028"},
{name:"Doxycycline",category:"Antibiotic",price:140,mfd:"03-2025",exp:"03-2028"},
{name:"Ciprofloxacin",category:"Antibiotic",price:160,mfd:"02-2025",exp:"02-2028"},
{name:"Ofloxacin",category:"Antibiotic",price:175,mfd:"01-2025",exp:"01-2028"},
{name:"Levofloxacin",category:"Antibiotic",price:240,mfd:"04-2025",exp:"04-2028"},
{name:"Augmentin",category:"Antibiotic",price:310,mfd:"02-2025",exp:"02-2028"},
{name:"Clindamycin",category:"Antibiotic",price:230,mfd:"01-2025",exp:"01-2028"},
{name:"Linezolid",category:"Antibiotic",price:450,mfd:"03-2025",exp:"03-2028"},

{name:"Face Mask",category:"General",price:10,mfd:"01-2025",exp:"01-2030"},
{name:"Hand Sanitizer",category:"General",price:80,mfd:"02-2025",exp:"02-2028"},
{name:"Digital Thermometer",category:"General",price:250,mfd:"01-2025",exp:"01-2030"},
{name:"Bandage Roll",category:"General",price:45,mfd:"03-2025",exp:"03-2030"},
{name:"Cotton Roll",category:"General",price:60,mfd:"01-2025",exp:"01-2030"},
{name:"Antiseptic Liquid",category:"General",price:130,mfd:"02-2025",exp:"02-2028"},
{name:"Gauze Pads",category:"General",price:70,mfd:"04-2025",exp:"04-2030"},
{name:"Medical Gloves",category:"General",price:150,mfd:"01-2025",exp:"01-2030"},
{name:"Hot Water Bag",category:"General",price:220,mfd:"02-2025",exp:"02-2030"},
{name:"BP Monitor",category:"General",price:1800,mfd:"01-2025",exp:"01-2032"},

{name:"Eye Drops",category:"Eye Care",price:95,mfd:"01-2025",exp:"01-2027"},
{name:"Lubricant Eye Drops",category:"Eye Care",price:180,mfd:"02-2025",exp:"02-2027"},
{name:"Ear Drops",category:"Eye Care",price:120,mfd:"03-2025",exp:"03-2027"},
{name:"Eye Wash",category:"Eye Care",price:160,mfd:"01-2025",exp:"01-2028"},
{name:"Contact Lens Solution",category:"Eye Care",price:240,mfd:"02-2025",exp:"02-2028"},
{name:"Eye Ointment",category:"Eye Care",price:150,mfd:"01-2025",exp:"01-2028"},
{name:"Artificial Tears",category:"Eye Care",price:220,mfd:"03-2025",exp:"03-2028"},
{name:"Eye Vitamin",category:"Eye Care",price:320,mfd:"02-2025",exp:"02-2028"},
{name:"Eye Patch",category:"Eye Care",price:60,mfd:"01-2025",exp:"01-2030"},
{name:"Eye Cleaner",category:"Eye Care",price:140,mfd:"04-2025",exp:"04-2028"},

{name:"Baby Lotion",category:"Baby Care",price:180,mfd:"01-2025",exp:"01-2028"},
{name:"Baby Soap",category:"Baby Care",price:70,mfd:"02-2025",exp:"02-2028"},
{name:"Baby Powder",category:"Baby Care",price:120,mfd:"01-2025",exp:"01-2028"},
{name:"Baby Shampoo",category:"Baby Care",price:190,mfd:"03-2025",exp:"03-2028"},
{name:"Baby Oil",category:"Baby Care",price:160,mfd:"02-2025",exp:"02-2028"},
{name:"Baby Wipes",category:"Baby Care",price:140,mfd:"01-2025",exp:"01-2028"},
{name:"Baby Cream",category:"Baby Care",price:150,mfd:"04-2025",exp:"04-2028"},
{name:"Baby Feeding Bottle",category:"Baby Care",price:280,mfd:"01-2025",exp:"01-2030"},
{name:"Baby Diapers",category:"Baby Care",price:450,mfd:"02-2025",exp:"02-2028"},
{name:"Baby Toothbrush",category:"Baby Care",price:90,mfd:"01-2025",exp:"01-2030"},

{name:"Hair Oil",category:"Personal Care",price:150,mfd:"01-2025",exp:"01-2028"},
{name:"Medicated Shampoo",category:"Personal Care",price:280,mfd:"02-2025",exp:"02-2028"},
{name:"Face Wash",category:"Personal Care",price:220,mfd:"03-2025",exp:"03-2028"},
{name:"Body Lotion",category:"Personal Care",price:250,mfd:"01-2025",exp:"01-2028"},
{name:"Lip Balm",category:"Personal Care",price:85,mfd:"02-2025",exp:"02-2028"},
{name:"Toothpaste",category:"Personal Care",price:110,mfd:"01-2025",exp:"01-2028"},
{name:"Mouth Wash",category:"Personal Care",price:180,mfd:"03-2025",exp:"03-2028"},
{name:"Hand Wash",category:"Personal Care",price:130,mfd:"02-2025",exp:"02-2028"},
{name:"Shaving Cream",category:"Personal Care",price:160,mfd:"01-2025",exp:"01-2028"},
{name:"Sunscreen SPF50",category:"Personal Care",price:420,mfd:"04-2025",exp:"04-2028"}

];
