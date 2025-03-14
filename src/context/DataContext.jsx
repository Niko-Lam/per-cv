import React, { createContext, useContext } from 'react';

// 创建上下文
const DataContext = createContext();

// 创建数据提供者组件
export const DataProvider = ({ children }) => {
  // 个人信息数据
  const personalInfo = {
    name: 'NIKO LAM',
    title: 'Front-end / Web Developer',
    description: 'Hello, I\'m Niko Lam, a web developer with 3 years of experience in frontend development, skilled in HTML5, CSS3, JavaScript, React.js, Next.js, and Vue.js. I excel in building responsive, user-focused interfaces and have additional experience in backend development with PHP and Laravel.',
    contact: {
      email: 'lin.mecoo@gmail.com',
      phone: '+852-90628542',
      linkedin: 'https://www.linkedin.com/in/niko-lam-28988124a/',
      github: 'https://github.com/Niko-Lam',
    }
  };

  // 技能数据
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue3', 'Next.js'],
    backend: ['PHP', 'Laravel', 'WordPress'],
    tools: ['Sass', 'Ant Design', 'Material-UI', 'Elementor']
  };

  // 工作经验数据
  const experiences = [
    {
      id: 1,
      company: 'digiEasy Company Limited',
      position: 'Web Developer',
      period: 'Sep 2022 - Jan 2025',
      description: [
        'My main tech stack includes CSS3, React, React Native, Next.js, PHP, and WordPress. I focus on maintaining projects and adding features to enhance performance and user experience.',
        'I also use Laravel to manage API integrations, providing reliable backend support for seamless functionality.'
      ],
      tags: ['React', 'React Native', 'Next.js', 'PHP', 'Laravel', 'WordPress']
    },
    {
      id: 2,
      company: 'Guangzhou Deshang Apparel Co., Ltd.',
      position: 'Front-end Web Developer',
      period: 'May 2021 - Jun 2022',
      description: [
        'Developed and maintained web applications using Vue.js framework, improving page load speed',
        'Product iteration and maintenance applications',
        'Participated in late testing and bug fixes to achieve requirements'
      ],
      tags: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript']
    }
  ];

  // 教育经历数据
  const education = [
    {
      id: 1,
      institution: 'Lingnan Institute of Technology',
      degree: 'Associate Degree, Computer Science',
      period: '2015 - 2018'
    },
    {
      id: 2,
      institution: 'Lingnan Institute of Technology',
      degree: 'Major Associate Degree, Pharmacist',
      period: '2015 - 2018'
    }
  ];

  // 项目数据
  const projects = [
    {
      id: 1,
      title: 'Content Management System (CMS)',
      techStack: 'Vite + VUE3 + TypeScript + ANTD',
      description: 'Daily maintenance of CMS system, add theme switching for the system, beautify CMS interface, simplify operation, reconstruct and upgrade system, write reusable components, standardize code, user verification, and Form verification.',
      tags: ['Vue3', 'TypeScript', 'Vite', 'Ant Design']
    },
    {
      id: 2,
      title: 'CMS System',
      techStack: 'React + Next.js + Mui',
      description: 'I am primarily responsible for building CMS systems. Typically, this system is divided into two clients: one for customers and one for administrators. Within this CMS system, there are many aspects such as designing common components, programming, permission management, and implementing business logic.',
      tags: ['React', 'Next.js', 'Material-UI']
    },
    {
      id: 3,
      title: 'WordPress Projects',
      techStack: 'Elementor + Woocommerce + ACF',
      description: [
        'Maintained a WordPress project, including pagination functionality, custom posts, custom fields and custom widgets',
        'Built a full WordPress project from scratch, ensuring a solid foundation for content management and customization'
      ],
      tags: ['WordPress', 'PHP', 'Elementor', 'Woocommerce', 'ACF'],
      fullWidth: true
    }
  ];

  // 将所有数据合并到一个对象中
  const data = {
    personalInfo,
    skills,
    experiences,
    education,
    projects
  };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

// 创建自定义钩子以便于使用上下文
export const useData = () => useContext(DataContext);