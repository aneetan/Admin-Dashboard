import './App.css'
import {BrowserRouter, Route, Routes} from "react-router"

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<div> Admin Dashboard </div>} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
