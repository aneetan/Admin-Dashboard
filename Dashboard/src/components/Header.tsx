import { useState } from 'react';
import { FaChevronDown, FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { MdLogout, MdOutlineSettings } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import useThemeStore from '../zustand/themeStore';

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

interface DropdownItems {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}

const Header = ({toggleSidebar, sidebarCollapsed}: HeaderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // dark mode logic here
    document.documentElement.classList.toggle('dark');
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const userNavigation : DropdownItems[] = [
    { name: 'Your Profile', icon: FaUser },
    { name: 'Settings', icon: MdOutlineSettings},
    { name: 'Logout', icon:  MdLogout},
  ];

  return (
    <header className={`sticky top-0 w-[100%] ${darkMode ? 'dark' : ''}`}>
      <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200">
        <div>
            <button
                onClick={toggleSidebar}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
            >
                <GiHamburgerMenu/>
            </button>
        </div>
        <div className="flex items-center space-x-4 pr-8">
          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <FaSun className="w-5 h-5"/>
            ) : (
              <FaMoon className="w-5 h-5" />
            )}
          </button>

          {/* User profile dropdown */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
              />
              <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-200">
                John Doe
              </span>
              <FaChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${userMenuOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {/* User dropdown menu */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-50">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <item.icon className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;