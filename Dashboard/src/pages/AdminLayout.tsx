import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import CustomFooter from '../components/CustomFooter'
import CustomSidebar from '../components/CustomSidebar'


const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen">
        <div 
          className={`fixed h-full z-20 transition-all duration-300 ease-in-out 
            ${collapsed ? 'w-20' : 'w-64'} 
            shadow-lg`}
        >
          <CustomSidebar collapsed={collapsed} />
        </div>

        <div 
          className={`transition-all duration-300 ease-in-out 
            ${collapsed ? 'ml-20' : 'ml-64'}`}
        >
          {/* Sticky header */}
          <div className='sticky top-0 z-10 shadow-sm'>
            <Header 
            sidebarCollapsed={collapsed} 
            toggleSidebar={toggleSidebar} 
          />
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 ">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 min-h-[calc(100vh-80px)]">
              <Outlet />
            </div>
          </div>

          <div className='flex justify-center items-center pt-2 dark:bg-gray-700'>
            <CustomFooter/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminLayout