import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router"
import AdminLayout from './pages/AdminLayout'
import Theme from './pages/Theme'

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLayout/>}>
            <Route path="/dashboard" element={<Theme/>} />
            <Route path="/team" element={<div> Team </div>} />
            <Route path="/projects" element={<div> Project</div>} />
            <Route path="/calendar" element={<div> Calendar </div>} />
            <Route path="/reports" element={<div> Report </div>} />

          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
