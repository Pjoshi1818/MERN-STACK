import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './Login'
function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Dashbord' element = { <Dashbord /> }/>
     
        <Route path='/Login' element = { <Login /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router