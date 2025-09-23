
import React, { useState } from 'react';


function Task1() {

    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='login'>
        {
            isLogin?(
    <form  id = "IN" action="">
         <input type="text" placeholder='Email' />
        <input type="text"  placeholder='password' />
          <button type='button' onClick={() => setIsLogin(false)}>
            GO TO SIGNUP PG.
          </button>
       </form>
            ):( 
         <form  id = "IN" action="">
         <input type="text" placeholder='Email' />
         <input type="text"  placeholder='create password' />
         <input type="text"  placeholder='confirm password' />
          <button onClick={() => setIsLogin(true)}>
            Back TO LOGIN PG.
          </button>
       </form>
            )
        }
   


            


{/* 
      <form id="IN">
        <input type="text" placeholder="Email" />
        
     
        <input
          type="password"
          placeholder={isLogin ? "Password" : "Create Password"}
        />
        {!isLogin && <input type="password" placeholder="Confirm Password" />}

        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "GO TO SIGNUP PG." : "BACK TO LOGIN PG."}
        </button>
      </form> */}




    </div>
  );
}

export default Task1