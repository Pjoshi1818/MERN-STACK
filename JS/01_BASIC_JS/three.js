// find  => return one element not full arr

// let re = arr.find((item)=>{
//     return item > 7;

// })
// console.log(re);

// we can declear arrow function like this
// a=>a**2;
//(a,b)=> a+b;

// let re = arr.findIndex((item)=>{
//     return item > 7;

// })
// console.log(re);

// some  => at least one condictipn is true
// let re = arr.some((item)=>{
//     return item > 7;

// })
// console.log(re);

// every
// let re = arr.every(item=>item > 7)
// console.log(re);

// let arr = [1,2,3,[4,[5],6,7],8,9,10];
// console.log(arr);
// let newarr = arr.flat(Infinity);
// console.log(newarr);

// join and reverse

// let arr = [1,2,3,4];
// let re = arr.join();   // return string with sepreater ()

// let date = "19-11-2023";
// let newdate = date.split("-");
// console.log(newdate);

// // reverse

// const newarr = arr.reverse()
// console.log(newarr);

// let arr = [45,5,78,21,6,4,58,79,4,51,5,5,4,];

// let sorted = arr.sort((a,b)=>a-b);   // call back function for integer arr if arr hold string value than use direct
// console.log(sorted);

// let result = arr.forEach((item)=>{
//  console.log(item);
// })
// console.log(result);

// *****************  string method *********************

// CharacterData, indexof , lastindexof , includes ,
// trim , split ,slice ,toUpercase,toLowerCase

let str = "pankaj joshi";

// console.log(str.charAt(5));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(str.includes("joshi"));

// trim
// console.log(str.length);
// let result =  str.trim();
// console.log(result);

// console.log(str.length);
// let result =  str.split(" ");
// console.log(result);

// let result = str.slice(2,4);
// console.log(result);
// let str2 = "ABCD";
// console.log(str.concat(str2));  // add two string

// replece**

// let rep = str.replace('a',"A");
// let rep = str.replaceAll(' ',"->");
// console.log(rep);

// Object method

// key ,value, entery, freez, seal, hasOwn, assign

// let obj = {
//     fistname : "pankaj",
//     lastname : "joshi"
// }

// let result = Object.keys(obj);
// let result1 = Object.values(obj);
// let result2= Object.entries(obj);

// Object.seal(obj);     // add new keys is not allow you can update exises value
// Object.freeze(obj);   // update add delete not allowed

// console.log(Object.hasOwn(obj,"lastname"));   // check key is present in obj

// assign => mearge two obj
// let obj1 = {
//     fistname : "pankaj",
//     lastname : "joshi"
// }

// let obj2 = {
//     fistname : "jayesh",
//     lastname : "joshi",
//     gender : "mail"
// }

// console.log(Object.assign(obj1,obj2));

// **********    IMP (of DAY )   *******

// spread op (...) or rest op (...);

// const mycoding = [
//     {
//         languagename: "javascript",
//         filename: "js"
//     },
//     {
//         languagename: "java",
//         filename: "java"
//     },
//     {
//         languagename: "python",
//         filename: "py"
//     }
// ];

// let arr = [10,20,30];

// let arr1 = [...arr,"pankaj"]
// arr1.push(45);
// console.log(arr)
// console.log(arr1)

// let obj = {
//     fistname : " pankaj ",
//     lastname : " joshi "
// }
// let obj1 = {
//     class : ""
// }
// let obj2 = {...obj , gender: "mail" }
// console.log(obj)
// console.log(obj2)

// DISTRUCTURING AND REST

// let obj = {
//   fistname: " pankaj ",
//   lastname: " joshi ",
//   gender: "mail",
//   section: " ASP",
//   address: "chittor ",
// };

// let { fistname, lastname, address, ...obj2 } = obj; // rest bachi hui value ko collect kara ga = rest  DISTRUCTURING
// console.log(obj);
// console.log(obj2);



let arr = [10,20,30,40,50];

let [a,,c,...rest] = arr;
console.log(rest);
console.log(a);
