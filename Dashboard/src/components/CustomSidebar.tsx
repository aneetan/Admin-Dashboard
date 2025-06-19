import { useState } from 'react';
import { IoIosHome } from "react-icons/io";
import { FaCalendar, FaChartLine, FaFolder, FaUser } from "react-icons/fa";
import { useLocation } from 'react-router';

interface Props {
    collapsed: boolean;
}

interface NavLinkItems {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    path: string;
}

const CustomSidebar = ({ collapsed }: Props) => {
    const [activeItem, setActiveItem] = useState<string>("Dashboard");
    const location = useLocation();

    const navItems: NavLinkItems[] = [
        { name: 'Dashboard', icon: IoIosHome, path: '/dashboard' },
        { name: 'Team', icon: FaUser, path: '/team' },
        { name: 'Projects', icon: FaFolder, path: '/projects' },
        { name: 'Calendar', icon: FaCalendar, path: '/calendar' },
        { name: 'Reports', icon: FaChartLine, path: '/reports' },
    ];

    return (
        <>
            <div
                className={`text-white transition-all duration-300 ease-in-out h-screen
          ${collapsed ? 'w-20' : 'w-64'}`}
            >
                <div className="flex flex-col h-full">
                    <div className={`flex items-center justify-center p-4 border-b border-teal-700 ${collapsed ? 'px-6' : 'px-6'}`}>
                        {!collapsed ? (
                            <h1 className="text-xl font-bold text-[var(--primary-color)]">Admin Panel</h1>
                        ) : (
                            <h1 className="text-xl font-bold text-[var(--primary-color)]">A</h1>
                        )}
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                onClick={() => setActiveItem(item.name)}
                                className={`flex items-center rounded-lg mx-2 p-3 transition-colors text-[var(--primary-color)]
                                ${activeItem === item.name
                                        ? 'bg-white text-[var(--primary-color)] shadow-md font-semibold'
                                        : 'text-[var(--primary-color)] hover:bg-teal-600'}
                                ${collapsed ? 'justify-center' : ''}`}
                            >
                                <item.icon className={`w-5 h-5 ${!collapsed ? 'mr-3' : ''}`} />
                                {!collapsed && (
                                    <span className="font-medium">{item.name}</span>
                                )}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default CustomSidebar;