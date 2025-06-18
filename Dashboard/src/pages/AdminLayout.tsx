import React, { useState } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import CustomFooter from '../components/CustomFooter'

const { Content } = Layout

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Layout className="min-h-screen">
        <div 
          className={`fixed h-full z-20 transition-all duration-300 ease-in-out 
            ${collapsed ? 'w-20' : 'w-64'} 
            shadow-lg`}
        >
          <Sidebar collapsed={collapsed} />
        </div>

        <Layout 
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
          
          <Content className="bg-gray-50">
            <div className="bg-white rounded-lg shadow p-6 min-h-[calc(100vh-100px)]">
              <Outlet />
            </div>
          </Content>

          <div className='flex justify-center items-center pt-2'>
            <CustomFooter/>
          </div>

        </Layout>
      </Layout>
    </div>
  )
}

export default AdminLayout