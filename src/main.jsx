import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import Success from './Success.jsx'
import Fail from './Fail.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}> </Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route path='/fail' element={<Fail/>}></Route>
  </Routes>
  </BrowserRouter>
   
  
    
)
