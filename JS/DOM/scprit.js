// // DOM 



// let l = document.getElementById('box')
// console.log(l);
// l.id = "box1";
// console.log(`   class name is  =  ${l.className}`);
// l.className = "class1";
// console.log(l.className)

// console.log(l.style)
// l.style.backgroundColor = " red"
// l.style.borderRadius = "50%"
// l.classList.add = "class2"
// console.log(l.classList);

// l.classList.toggle("class1")


// let mylink = document.getElementById("link")
// console.log(mylink);


// mylink.href =  "https://jionet2.jio.in:8443/";

// let input = document.getElementById("password")
// input.type = "text";


//  let mydiv = document.getElementById('box')

//  mydiv.setAttribute("style","background:yellow")
//  mydiv.setAttribute("style","background:brown")   // replace


// // innerHtml , innerText , TextContent
// // mydiv.innerHTML = " pankaj joshi "   
// mydiv.innerHTML = " <input id='pass' type='password'>"
// let newpara = document.getElementById('para')
// console.log(newpara.textContent);

// // mydiv.innerText = " lalit "
// mydiv,textContent = "jayesh "

//  let mydiv = document.getElementById('box')
// let array  = Array.from(mydiv)
// // now 
// for (let index = 0; index < array.length; index++) {
  
//     mydiv
// }


//  **********************************************************************

// selecter 




// let qs = document.querySelector(".box");

// console.log(qs);

// let newel = document.createElement("h3");
// newel.innerHTML = " pankaj joshi ";
// newel.style.backgroundColor= "#584e4eff";
// document.body.appendChild(newel)

// *************************TASK 1****************************

const prod=[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "brand": "Logitech",
    "price": 899,
    "discount": 10,
    "inStock": true,
    "rating": 4.5,
    "reviews": 120,
    "createdAt": "2025-01-10"
  },
  {
    "id": 2,
    "name": "Gaming Keyboard",
    "category": "Electronics",
    "brand": "Razer",
    "price": 2999,
    "discount": 15,
    "inStock": true,
    "rating": 4.7,
    "reviews": 340,
    "createdAt": "2025-01-11"
  },
  {
    "id": 3,
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "brand": "Sony",
    "price": 4999,
    "discount": 20,
    "inStock": true,
    "rating": 4.6,
    "reviews": 450,
    "createdAt": "2025-01-12"
  },
  {
    "id": 4,
    "name": "Smartphone",
    "category": "Mobiles",
    "brand": "Samsung",
    "price": 24999,
    "discount": 10,
    "inStock": true,
    "rating": 4.8,
    "reviews": 980,
    "createdAt": "2025-01-15"
  },
  {
    "id": 5,
    "name": "Laptop",
    "category": "Computers",
    "brand": "Dell",
    "price": 55999,
    "discount": 5,
    "inStock": true,
    "rating": 4.4,
    "reviews": 220,
    "createdAt": "2025-01-18"
  },
  {
    "id": 6,
    "name": "Smart Watch",
    "category": "Wearables",
    "brand": "Apple",
    "price": 32999,
    "discount": 12,
    "inStock": true,
    "rating": 4.9,
    "reviews": 500,
    "createdAt": "2025-01-20"
  },
  {
    "id": 7,
    "name": "DSLR Camera",
    "category": "Cameras",
    "brand": "Canon",
    "price": 45999,
    "discount": 8,
    "inStock": true,
    "rating": 4.7,
    "reviews": 300,
    "createdAt": "2025-01-21"
  },
  {
    "id": 8,
    "name": "LED TV",
    "category": "Home Appliances",
    "brand": "Sony",
    "price": 35999,
    "discount": 10,
    "inStock": true,
    "rating": 4.5,
    "reviews": 410,
    "createdAt": "2025-01-22"
  },
  {
    "id": 9,
    "name": "Refrigerator",
    "category": "Home Appliances",
    "brand": "LG",
    "price": 27999,
    "discount": 6,
    "inStock": true,
    "rating": 4.4,
    "reviews": 200,
    "createdAt": "2025-01-23"
  },
  {
    "id": 10,
    "name": "Microwave Oven",
    "category": "Home Appliances",
    "brand": "Samsung",
    "price": 9999,
    "discount": 7,
    "inStock": true,
    "rating": 4.3,
    "reviews": 120,
    "createdAt": "2025-01-25"
  },
  {
    "id": 11,
    "name": "Air Conditioner",
    "category": "Home Appliances",
    "brand": "Voltas",
    "price": 32999,
    "discount": 10,
    "inStock": true,
    "rating": 4.6,
    "reviews": 260,
    "createdAt": "2025-01-26"
  },
  {
    "id": 12,
    "name": "Washing Machine",
    "category": "Home Appliances",
    "brand": "Whirlpool",
    "price": 22999,
    "discount": 9,
    "inStock": true,
    "rating": 4.4,
    "reviews": 190,
    "createdAt": "2025-01-27"
  },
  {
    "id": 13,
    "name": "Vacuum Cleaner",
    "category": "Home Appliances",
    "brand": "Philips",
    "price": 6999,
    "discount": 5,
    "inStock": true,
    "rating": 4.2,
    "reviews": 80,
    "createdAt": "2025-01-28"
  },
  {
    "id": 14,
    "name": "Coffee Maker",
    "category": "Kitchen",
    "brand": "Nescafe",
    "price": 4999,
    "discount": 15,
    "inStock": true,
    "rating": 4.1,
    "reviews": 100,
    "createdAt": "2025-01-29"
  },
  {
    "id": 15,
    "name": "Induction Cooktop",
    "category": "Kitchen",
    "brand": "Prestige",
    "price": 3499,
    "discount": 10,
    "inStock": true,
    "rating": 4.3,
    "reviews": 140,
    "createdAt": "2025-01-30"
  },
  {
    "id": 16,
    "name": "Mixer Grinder",
    "category": "Kitchen",
    "brand": "Bajaj",
    "price": 3999,
    "discount": 12,
    "inStock": true,
    "rating": 4.4,
    "reviews": 160,
    "createdAt": "2025-02-01"
  },
  {
    "id": 17,
    "name": "Air Fryer",
    "category": "Kitchen",
    "brand": "Philips",
    "price": 7999,
    "discount": 8,
    "inStock": true,
    "rating": 4.5,
    "reviews": 170,
    "createdAt": "2025-02-02"
  },
  {
    "id": 18,
    "name": "Water Purifier",
    "category": "Home Appliances",
    "brand": "Kent",
    "price": 14999,
    "discount": 7,
    "inStock": true,
    "rating": 4.6,
    "reviews": 220,
    "createdAt": "2025-02-03"
  },
  {
    "id": 19,
    "name": "Smart Speaker",
    "category": "Electronics",
    "brand": "Amazon Echo",
    "price": 5999,
    "discount": 10,
    "inStock": true,
    "rating": 4.7,
    "reviews": 340,
    "createdAt": "2025-02-04"
  },
  {
    "id": 20,
    "name": "Tablet",
    "category": "Electronics",
    "brand": "Apple iPad",
    "price": 49999,
    "discount": 5,
    "inStock": true,
    "rating": 4.8,
    "reviews": 420,
    "createdAt": "2025-02-05"
  }]

const table = document.createElement('table');

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

Object.keys(prod[0]).forEach(key => {
  const th = document.createElement('th');
  th.textContent = key;  
  th.style.border = '1px solid black';
   headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);
const tbody = document.createElement('tbody');

// prod.forEach(item => {
//   const tr = document.createElement('tr');
//   Object.values(item).forEach(value => {
//     const td = document.createElement('td');
//     td.textContent = value;
//     td.style.border = '1px solid black'; 
//     tr.appendChild(td);
//   });
//   tbody.appendChild(tr);
// });

let show = document.getElementById("bt");
show.addEventListener("click",function(){
  prod.forEach(item => {
  const tr = document.createElement('tr');
  Object.values(item).forEach(value => {
    const td = document.createElement('td');
    td.textContent = value;
    td.style.border = '1px solid black'; 
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

})
let hide = document.getElementById('bt2');
hide.addEventListener("click",function(){
   tbody.style.display = "none";
})
show.addEventListener("click",function(){
   tbody.style.display = "";
})




table.appendChild(tbody);
document.body.appendChild(table);
