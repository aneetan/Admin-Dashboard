import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const AdminLayout = () => {
  return (
    <>
     <div className="flex">
        <Sidebar/>
        <div>
            <Outlet/>
        </div>        
     </div>
      
    </>
  )
}

export default AdminLayout
