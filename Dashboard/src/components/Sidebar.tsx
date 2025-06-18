import { useState } from 'react';
import { IoIosHome } from "react-icons/io";
import { FaCalendar, FaChartLine, FaFolder, FaHamburger, FaUser } from "react-icons/fa";
import Header from './Header';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { name: 'Dashboard', icon: IoIosHome },
    { name: 'Team', icon: FaUser },
    { name: 'Projects', icon: FaFolder },
    { name: 'Calendar', icon: FaCalendar },
    { name: 'Reports', icon: FaChartLine },
  ];

  return (
    <>
      <div 
        className={`bg-white shadow-lg transition-all duration-300 ease-in-out h-screen
          ${collapsed ? 'w-20' : 'w-55'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Sidebar Header */}
          <div className={`flex items-center justify-center p-4 border-b border-gray-200 ${collapsed ? 'px-6' : 'px-6'}`}>
            {!collapsed? (
              <h1 className="text-xl font-bold  text-[var(--primary-color)]">Admin</h1>
            ): (
              <h1 className="text-xl font-bold text-[var(--primary-color)]">A</h1>
            )}
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-2 py-4 space-y-1 ">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center rounded-lg mx-2 p-3 transition-colors
                  ${activeItem === item.name 
                    ? 'bg-indigo-50 text-[var(--primary-color)]' 
                    : 'text-gray-600 hover:bg-gray-100'}
                  ${collapsed ? 'justify-center' : ''}`}
              >
                <item.icon className={`w-6 h-6 ${!collapsed ? 'mr-3' : ''}`} />
                {!collapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <Header toggleSidebar={toggleSidebar}  sidebarCollapsed={collapsed}/>
      </>
  );
};

export default Sidebar;