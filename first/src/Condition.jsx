import React, { useState } from 'react'

export const Condition = () => {

    const [role , setRole] = useState("ADMIN");

  return (
    <div>


            {role === "ADMIN" ? "Hello ADMIN" : role === "USER " ? "Hello USER" :role === "VENDER" ? " Hello VD" :"invalid" }


    </div>
  )
}
