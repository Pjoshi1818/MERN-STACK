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




fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(json=>console.log(json))