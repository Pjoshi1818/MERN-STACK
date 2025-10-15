// const { error } = require("console");
// const fs =require("fs");

// // fs.mkdirSync("files");

// fs.mkdir("img" , (err)=>{
//    if(err){
//      console.log(err);
//    }
// })


// fs.writeFileSync("test.txt" , "My name is ?");
// fs.writeFileSync("test.txt" , "My name is pankaj");

// fs.writeFile("test.txt","what is your last name", (err)=>{
//         if(err){
//             console.log(err);
//         }
// })

// fs.watchFile("files/index.js", "console.log('pankaj') ",(err)=>{
//      if(err){
//             console.log(err);
//         }
// })


// fs.readFile("test.txt","utf-8",(err,data)=>{
//    if(err){
//             console.log(err);
//         }
//         else {
//             console.log(data);
//         }
// });


// fs.appendFile("test.txt","hello",(err,data)=>{
//    if(err){
//             console.log(err);
//         }})

    // unlink folder delete

// fs.unlinkSync("test.txt");



    //  rmdir  remove
   
//     const fs =require("fs");
// //   fs.mkdirSync("files23");
//     fs.rmdirSync("files23");

// ********************************  OS  *********************

// const os =require("os");

// console.log(os.arch())
// console.log(os.homedir())
// // console.log(os.freemem())
// // console.log(os.totalmem())
// const freeMemGB = (os.freemem() / (1024 ** 3)).toFixed(2);
// const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2);

// console.log(`Free Memory: ${freeMemGB} GB`);
// console.log(`Total Memory: ${totalMemGB} GB`);
// console.log(os.())



const http = require("http");

const server = http.createServer((req,res)=>{
  res.end("inside ");
});



server.listen(3000,"127.0.0.1",()=>{
    console.log("runing on port 3000")
})