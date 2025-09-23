import React, { useEffect, useState } from 'react'

const Effect = ()=>{
    const [data,setData] = useState([]);
    
    const fatchdata = async()=>{
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const productData = await response.json();
            setData(productData)
        }
        catch(error){
   console.log(error);
   
        }
    }
    useEffect(()=>{
    fatchdata();
},[]);
}



export default Effect