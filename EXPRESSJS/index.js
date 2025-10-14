// const { log } = require("console");
// const express = require("express");

// const app = express();

// //CURD


// app.use(express.json());
// // product CURD 

// // list of all product -search - get 
// // info of particular product -get 
// // create product  - post 
// // seller update   - put 
// // delete product  - DELETE
// //  
// const fs = require("fs")





// app.get("/getAllProduct",(req,res)=>{                     // http://localhost:3000/getAllProduct
//     let productdata = fs.readFileSync("product.json" ,"utf-8")
//     res.send(productdata);

// })




// app.get("/getProductById/:productId",(req,res)=>{//http://localhost:3000/getProductById
//     const {productId} = req.params;
//     // console.log(typeof productId)
//     const productData = JSON.parse(fs.readFileSync("product.json","utf-8"));
//     // console.log(typeof productData);
//     const filteredData = productData.filter((item)=>item.id===+productId);
//     if(filteredData.length === 0) return res.status(404).send({message : "Product not found"});
//     res.status(200).send({message : "Product Fetched" , product : filteredData[0]});

// });


// app.post("/createProduct",(req,res)=>{  // http://localhost:3000/createProduct
//     const reqBody = req.body;
   
   
//              const productData = fs.readFileSync("product.json","utf-8");
//        console.log(productData)
//    const parsedData = JSON.parse(productData);
//      const updatedReqBody = {...reqBody , id : Date.now()};
//  parsedData.push(updatedReqBody);
//     fs.writeFileSync("product.json",JSON.stringify(parsedData , null ,2));
//     res.status(201).send({message : "Product Created" , product : updatedReqBody})
// });



// app.put("/updateProduct/:id",(req,res)=>{  // http://localhost:3000/updateProduct
//         // res.send("home route accessed")
//      const {id} = req.params;
//     const toBeUpdated = req.body;
//     let changed = false;
//     const data = JSON.parse(fs.readFileSync("product.json","utf-8"));
//     let update = {};
//     const filteredData = data.map((item)=>{
//         if(item.id === +id){
//             changed = true;
//             update ={...item , ...toBeUpdated}
//             return {...item , ...toBeUpdated}
//         }else{
//             return item;
//         }
//     });

//     if(!changed) return res.status(404).send({message : " Product Not Found"})
//     fs.writeFileSync("product.json",JSON.stringify(filteredData,null,2))
// //     const updated = filteredData.filter((item)=>item.id===+id);
//     res.status(200).send({message : "Product updated" , product : updated})
// });

// app.delete("/deleteProduct/:productId", (req, res) => {
//   const { productId } = req.params;
//   const productData = JSON.parse(fs.readFileSync("product.json", "utf-8"));

 
//   const productExists = productData.some((item) => item.id === +productId);
//   if (!productExists) {
//     return res.status(404).send({ message: "Product not found" });
//   }

 
//   const updatedData = productData.filter((item) => item.id !== +productId);

  
//   fs.writeFileSync("product.json", JSON.stringify(updatedData, null, 2));

//   res.status(202).send({
//     message: "Product deleted success..",
//   });
// });




// app.listen(3000,()=>{
//     console.log("server is runing on port 3000");
    
// });

// // **********************  MVC  *****************
//  // -> MODEL ROUTER CONTROLLER 
//  //   










const express = require("express");
const fs = require("fs");
const productRoutes = require("./router/product");
const loggerMiddleware = require("./middleware/loggerMiddileware");
const app = express();

// create - POST
// read - GET
// update - PUT
// delete - DELETE

app.use(express.json());

app.use(loggerMiddleware);
// product CRUD
// list of all product - search  - GET
// information of a particular product - GET
// create product - POST
// update product - PUT
// delete product - DELETE

// MVC - model , router , controller

//  index.js <-- router <-- controller <-- model
// http://localhost:3000/product/getAllProduct

app.use("/product",productRoutes);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
