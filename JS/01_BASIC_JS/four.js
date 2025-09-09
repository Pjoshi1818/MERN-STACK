// //  math ,number ,date 

// // math - sqrt , random , ceil ,floor ,round 
// //Number - > to Fixed , parseInt , parseFloat , isNaN ,isINtiger 

// // date - getFULLtear , getmonth , getday ,getDAY , getdate  ,gethours , getminutes , getSEconds,




// console.log(Math.ceil(50.1))   //return a upper round of
// // console.log(Math.floor(50.63))  // int 
// // // console.log(Math.random()) // random num 
// // console.log(Math.round(45.21))  // lower value 
// // console.log(Math.pow(45))     
// // console.log(Math.s(4))


// // let arr =[1,23,4,5,5];
// // console.log(Math.min(arr))// not work 





// console.log(Math.floor( 1000 + Math.random() * 1000))   // OTP // give four digit num but not all :
// console.log(Math.floor( 1000 + Math.random() * 9000))   // OTP // give four digit num all :


// // ****************  Number  Method ******************

// let num = 102.9965321;
// // console.log(num.toFixed(2))

// let str = "50";
// let newnum = Number(str);
// console.log( newnum);
// console.log(typeof newnum);
// let str2 = "50px56" ;     //  => 50;
//  console.log(Number.parseInt(str2))
// let str2 = "50.52px56" ;     //  => 50.52;
//  console.log(Number.parseFloat(str2))

// let str = "50px";    // wrong   
// let newnum = Number(str);

// if(Number.isNaN(newnum)){
//     console.log(` not a number ${newnum}`)
// }  
// let addnum = "74pj58412kg6s4ddgscdd10c4";

// let newarr = addnum.split("");


//  let sum = 0;
//  newarr.forEach((item)=>{
//     let newnum = Number(item);
//     if(!Number.isNaN(newnum)){
//         sum += newnum;
//     }
//  })
// console.log(sum);


// ********************* DATE ***************************

// let date = new Date;
// console.log(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.toTimeString());
// console.log(`day is:- ${date.getDay()} and month is ${date.getMonth()}  `)


   // we can us

// console.log(Date.now()% 10000);   // we can use to genreate unique num:



// *** type conversion and type coercion ********************************************


let score =98


// console.log(typeof score )
// console.log(typeof (score)) ; 

console.log(String(score));
console.log(typeof String(score));
console.log(typeof score);   
console.log(Boolean(score));   
let value = 5;
let negvalue = -value
// console.log(negvalue)*
console.log(Boolean(negvalue)); 


// **  question related to return true or alse 
let vari = []; 
console.log(String(vari));   // more question like this 




// type coercion

console.log(5+"5"-5+"10"+10);

console.log("5"+false);
console.log([]+[]);
console.log([]+{});
console.log({}+[]);


console.log(![]+[]); // 0





// ***********************************  SCOPE   *****************************

var c = 56      
let a = 50       

if (true) {
    let a = 10   
    const b = 20 
    var c = 30 
    console.log("INNER : ", a) // prints inner 'a' (10)
}













