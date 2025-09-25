
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './Login'
// import Dashbord from './Dashbord'

// function AppRouter() {
//   return (
//     <BrowserRouter>
  
//       <Routes>
//         <Route path='/Login' element={<Login />} />
//         <Route path="/Dashbord" element={<Dashbord />} /> 
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default AppRouter

import Login from './Login'
import Home from './Home'
import Dashbord from './Dashbord'
import Parent from './Parent'
import {createBrowserRouter} from 'react-router-dom'

const AppRouter = createBrowserRouter([
  
  {  element : <Parent />,
    children : [
      {
        path : "/dashboard",
        element : <Dashbord />
      },
      {
        path : "/home",
        element : <Home />
      },
      {
       path : "/login",
       element : <Login />
      }
     
    ]
  }
]);

export default AppRouter;