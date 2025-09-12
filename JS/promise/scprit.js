//
//****************   Promises  **********

// function fatchdata(){
//     let data = {
//           name: "pankaj",
//           lastname : "joshi "
//     }
//     return new Promise((resolve, reject) => {
//         let rd = Math.floor(Math.random()*100);
//         console.log(rd);
//     //   if(){};
//     // else 
//         setTimeout(()=>{
//             resolve(data);
//         },2000) 
//     })

// }


// let result = fatchdata();
// result
// .then((res)=>{
//     console.log(res);
//     alert("DATA ");
//     })
// .catch((error)=>{
//     console.log(error);

// })




// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))



// Async Js

// Promise

// function fetchData(){
//     let data = {
//         firstName : "shubham",
//         lastName : "Jain",
//         gender : "Male"
//     }
//     return data;
// }

// let result;

// setTimeout(()=>{
//     result = fetchData();
// },2000);

// console.log(result)


// function fetchData(){
//     let data = {
//         firstName : "shubham",
//         lastName : "Jain",
//         gender : "Male"
//     };

//     return new Promise((resolve , reject)=>{
//         let randomNumber = Math.floor(Math.random()*100); 
//         console.log(randomNumber)
//         setTimeout(()=>{
//             if(randomNumber%2===0){
//                 resolve(data)
//             }else{
//                 reject("Error in fetching data");
//             }
//         },2000);
//     })
// }

// let result = fetchData();

// result
// .then((res)=>{
//     console.log(res);
//     alert("Data Fetched");
// })
// .catch((error)=>{
//     console.log(error);
//     alert("Error");
// })
// console.log("Hello world");

// const fetchData = ()=>{
//     return fetch("https://fakestoreapi.com/products");    
// }

// fetchData()
// .then((res)=>{
//    return res.json()
// })
// .then((data)=>{
//     let tbody = document.getElementById("tbody");
//     data.forEach((item) => {
//         let tr = document.createElement("tr");
//         tr.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.price}</td><td>${item.category}</td><td>${item.rating.rate}</td>`;
//         tbody.appendChild(tr);
//     });
// })
// .catch((error)=>{
//     console.log(error)
// })


// const fetchData = async()=>{
//   const responce = await  fetch("https://fakestoreapi.com/products")   
//   const data = await responce.json();
//   console.log(data);
//    let tbody = document.getElementById("tbody");
// }



//  ***********   event loop ************** 

