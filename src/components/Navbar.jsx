import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useData } from '../context/DataContext';

const Navbar = ({ darkMode, toggleTheme }) => {
  const { personalInfo } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动事件，当页面滚动时改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切换移动端菜单
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 点击链接后关闭移动端菜单
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-light/90 dark:bg-dark/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-gradient">
            {personalInfo.name.split(' ')[0] + "." +personalInfo.name.split(' ')[1]}
          </a>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              HOME
            </a>
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              EXPERIENCE
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              PROJECTS
            </a>
            
            {/* 主题切换按钮 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-dark/10 dark:bg-light/10 hover:bg-dark/20 dark:hover:bg-light/20 transition-all"
            >
              <FontAwesomeIcon icon={darkMode ? 'moon' : 'sun'} className={darkMode ? 'text-blue-300' : 'text-yellow-500'} />
            </button>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-dark/10 dark:bg-light/10 hover:bg-dark/20 dark:hover:bg-light/20 transition-all"
            >
              <FontAwesomeIcon icon={darkMode ? 'moon' : 'sun'} className={darkMode ? 'text-blue-300' : 'text-yellow-500'} />
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md bg-dark/10 dark:bg-light/10 hover:bg-dark/20 dark:hover:bg-light/20 transition-all"
            >
              <FontAwesomeIcon icon={isOpen ? 'times' : 'bars'} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div
        className={`md:hidden absolute w-full bg-light dark:bg-dark-lighter shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}
      >
        <div className="px-4 py-2 space-y-2">
          <a
            href="#"
            onClick={closeMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            HOME
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            EXPERIENCE
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            PROJECTS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;