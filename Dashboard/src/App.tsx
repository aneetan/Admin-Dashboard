import './App.css'
import {BrowserRouter, Route, Routes} from "react-router"
import AdminLayout from './pages/AdminLayout'
import Dashboard from './pages/Dashboard'
import AddVehiclesForm from './pages/AddVehiclesForm'

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLayout/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/team" element={<AddVehiclesForm/>} />
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
