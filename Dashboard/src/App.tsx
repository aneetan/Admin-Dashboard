import './App.css'
import {BrowserRouter, Route, Routes} from "react-router"
import AdminLayout from './pages/AdminLayout'

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLayout/>} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
