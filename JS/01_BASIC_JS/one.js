// // 'use strict';
// // console.log("ram bolo bhi ram");
// // alert("papa bol ")
// // console.log(prompt("enter a num"));
// // console.log(confirm("you want to exit!"));

// //   {
// //     let a = 10;
// //     var b = 20;
// //     const c = 30;

// //   }

// //   a = 20;
// //   b = 40;
// //   c = 50;

// //   console.log(a);
// //   console.log(b);
// //   console.log(c);

//  // primitive

// // -> string, number, boolean ,null , undefined , Bigint ,symbol;

// //  // ******** reference (non primitive )**********

// //  //Array , object ,function ,date

// let v = function papa(){
//    return console.log("ram");
// };

// console.log(typeof v);

// let one = "ram"
// let two = "kumar"

// console.log(`name is ${one +" "+ two} and  last name is ${two}`);

// console.log(typeof typeof one)   // string
// let newname = null;

// const id =  Symbol('123')
// const sid = Symbol('123')

// // let oone = "1";
// // let twoh = 1;
// // console.log(oone === twoh);

// console.log(id == sid )

// day 2
// operaters

// let a= 10;
// let b = "10";

// console.log("The division is = ", a/b);
// console.log("The add is = ", a+b);
// console.log("The reminder is = ", a%b);

//  a += b;
//  console.log(a);

//  a **= b;
//  console.log(a);

// console.log(2**2**2);

// console.log(a == b);
// console.log(a===b);

// console.log(a != b);
// console.log(a !==b);
// console.log(a > b );

// let x = true;
// let y = false;
// console.log(x&&y);

// console.log(x&&y);
// console.log(x||y);
// console.log(x&&![]);
// console.log(x&&[]);

// falsy values → false, 0, -0, 0n (BigInt zero), null, undefined, NaN,""
// truthy values → "0", "false", " ", [], {}, function(){}

// console.log(" "  && 0 ||  "1" );

// console.log("45 "  || []);

// val = 5 ?? 10

// let num1 = 10;
// let num2 = 0;
// let num3 = 20;

// console.log(num1 && num3);   // 20
// console.log(num2 || num3);  // 20
// console.log(num1 || num2); // 10
// console.log(num2 && num3); //0

// let str1 = "Hello";
// let str2 = "";
// let num1 = 42;

// console.log(str1 && num1);  //42
// console.log(str2 || num1);   //42
// console.log(str1 || str2);  //hello
// console.log(num1 && str2);  //""

// let isTrue = true;
// let isFalse = false;
// let num = 10;

// console.log(isTrue && num);
// console.log(isFalse || num);
// console.log(isTrue && isFalse);
// console.log(isFalse || isTrue);

// let num1 = 0;
// let num2 = 100;
// let str1 = "JS";
// let str2 = "";

// console.log((num1 || num2) && str1);
// console.log((str2 || num1) || str1);
// console.log((str1 && num2) || num1);
// console.log((num1 && str2) || str1);

// let bool1 = true;
// let bool2 = false;
// let num = 0;
// let str = "Code";

// console.log(bool1 && str && num);
// console.log(bool1 || str || num);
// console.log(bool2 || num || str);
// console.log(bool2 && str && num);

// let a = 5;
// let b = 0;
// let c = "Hi";
// let d = "";

// console.log(a && b && c);
// console.log(a || b || d);
// console.log(b || d || c);
// console.log(c && a && d);

// let x = 10;
// let y = 0;
// let z = -5;

// console.log(x && y && z);
// console.log(x || y || z);
// console.log(y || z || x);
// console.log(z && x && y);

//  let role = "ADMIN";
//   role === "ADMIN" && console.log("you are login as  admin ");

//  role = "USER";
//  role === "USER" && console.log("you are  login as a user  ");

//  let x= 5;
//  let y = 10;

//  console.log(x<<1);
//   console.log(x>>1);

//control flow

// conditional statements

// let number = 90;

// if(number > 30) console.log("ram ji ") ,console.log(" ki jay ho ");

// switch case

// let day = 5;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//         console.log("Thuresday");
//         break;
//         case 5:
//         console.log("Friday");
//         break;
//         case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log(" invalid ")
//         break;
// }

// const obj ={
//     email: "ja@email.com",
//     id: "001"
// }

// obj.email = "pankaj@gmail.com";

// console.log(obj.email);

// console.log(obj);

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 7) {
//      console.log("thala for a resion")
//   }
//    console.log(element)

// }

// function par(row ,col){
// for (let i = 0; i < row; i++) {
//     let s= ""
//  for(let i = 0 ; i< col;i++ ){
//   s += " * "
//  }
//  console.log(s);
// }
// }
// par(8,8);

function par(row, col) {
  for (let i = 0; i < row; i++) {
    let s = i;
    for (let i = 0; i < col; i++) {
      s += i;
    }
    console.log(s);
  }
}
par(8, 8);
