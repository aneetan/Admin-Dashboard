import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router"
import AdminLayout from './pages/AdminLayout'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLayout/>}>
            <Route path="/dashboard" element={<div> Hello </div>} />
          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
