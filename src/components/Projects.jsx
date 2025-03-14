import React from 'react';
import { useData } from '../context/DataContext';

const Projects = () => {
  const { projects } = useData();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 dark:from-primary/5 dark:to-secondary/5"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">PERSONAL PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`cyberpunk-card bg-white dark:bg-dark p-6 sm:p-8 h-full flex flex-col ${
                project.fullWidth ? 'md:col-span-2' : ''
              }`}
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Tech Stack:
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.techStack}
                </p>
              </div>
              <div className="flex-grow">
                {Array.isArray(project.description) ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {project.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => {
                  const isBackend = ['PHP', 'WordPress', 'Laravel'].includes(tag);
                  const isFramework = ['React', 'Vue3', 'Next.js', 'TypeScript', 'Vite'].includes(tag);
                  
                  let className = 'px-3 py-1 rounded-full text-xs ';
                  if (isBackend) {
                    className += 'bg-secondary/10 text-secondary dark:bg-secondary/20';
                  } else if (isFramework) {
                    className += 'bg-primary/10 text-primary dark:bg-primary/20';
                  } else {
                    className += 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
                  }
                  
                  return (
                    <span key={index} className={className}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;