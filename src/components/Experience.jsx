import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useData } from '../context/DataContext';

const Experience = () => {
  const { experiences, education } = useData();

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-darker dark:bg-dark-lighter relative"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/5 dark:to-secondary/5"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">WORK EXPERIENCE</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="cyberpunk-card bg-white dark:bg-dark p-6 sm:p-8"
              data-aos="fade-up"
            >
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">
                  {exp.company}
                </h3>
                <span className="text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-4">{exp.position}</h4>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {Array.isArray(exp.description) ? (
                  exp.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tags.map((tag, index) => {
                  const isBackend = ['PHP', 'Laravel', 'WordPress'].includes(tag);
                  return (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs ${isBackend ? 'bg-secondary/10 text-secondary dark:bg-secondary/20' : 'bg-primary/10 text-primary dark:bg-primary/20'}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">EDUCATION</span>
          </h2>

          {education.map((edu) => (
            <div
              key={edu.id}
              className="cyberpunk-card bg-white dark:bg-dark p-6 sm:p-8 mt-6 first:mt-0"
              data-aos="fade-up"
            >
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">
                  {edu.institution}
                </h3>
                <span className="text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {edu.degree}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;