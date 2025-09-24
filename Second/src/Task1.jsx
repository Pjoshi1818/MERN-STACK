import React, { useState } from "react";

function Task1() {
  const [isLogin, setIsLogin] = useState(true);
  const handlechange = (e)=>{

  }
  return (


  
    <div className="login">
      {
        
        //         isLogin?(
        // <form  id = "IN" action="">
        //   <h1>LOGIN PAGE </h1>
        //      <input type="text" placeholder='Email' />
        //     <input type="text"  placeholder='password' />
        //       <button type='button' onClick={() => setIsLogin(false)}>
        //         GO TO SIGNUP PG.
        //       </button>
        //       {/* <button> SUBMIT </button> */}
        //    </form>
        //         ):(
        //      <form  id = "IN" action="">
        //       <h1> SIGNUP PAGE  </h1>
        //      <input type="name" placeholder='Full  Name  ' />
        //      <input type="email" placeholder='Email' />
        //      <input type="password"  placeholder='create password' />
        //      <input type="password"  placeholder='confirm password' />
        //      <input type="number"  placeholder='Enter' />
        //      <button id=''> LOGIN  </button>
        //       <button onClick={() => setIsLogin(true)}>
        //         Back TO LOGIN PG.
        //       </button>
        //       {/* <button type='submit'> SUBMIT </button> */}
        //    </form>
        //         )
        //     }
      }
       
     
 
       
      
       {

     
        <form id="IN">
          <input type="Name " placeholder="Enter name" />
          <input type="text" placeholder="Email" />

          <input
            type="password"
            placeholder={isLogin ? "Password" : "Create Password"}
          />

          {!isLogin && (
              <input type="password" placeholder="Confirm Password" />
            ) && <input type=""> </input>}

          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "GO TO SIGNUP PG." : "BACK TO LOGIN PG."}
          </button>
        </form>
      }
    </div>
  );
}

export default Task1;
