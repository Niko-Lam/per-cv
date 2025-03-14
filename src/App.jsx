import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { DataProvider } from './context/DataContext';

// 添加FontAwesome图标库
library.add(fab, fas);

function App() {
  // 暗黑模式状态管理
  const [darkMode, setDarkMode] = useState(true);

  // 检查保存的主题偏好或使用系统偏好
  useEffect(() => {
    // 默认使用暗黑模式，除非localStorage中明确设置为light
    if (localStorage.getItem('theme') === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // 默认使用暗黑模式
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      // 保存到localStorage
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
      }
    }
  }, []);

  // 切换主题
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <DataProvider>
      <div className="bg-light dark:bg-dark text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Header />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;