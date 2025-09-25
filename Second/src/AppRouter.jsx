
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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Dashbord from "./Dashbord";
import Parent from "./Parent";

const router = createBrowserRouter([
  {
    element: <Parent />,
    children: [
      { path: "/dashboard", element: <Dashbord /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);


function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;

