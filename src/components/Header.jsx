import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useData } from '../context/DataContext';

const Header = () => {
  const { personalInfo, skills } = useData();

  return (
    <header className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--tw-gradient-stops)))] from-primary/5 via-transparent to-transparent dark:from-primary/10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10 max-w-7xl mx-auto">
        <div className="lg:col-span-3 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-gradient animate-glow">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400">
              {personalInfo.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <p className="text-lg max-w-2xl">{personalInfo.description}</p>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="cyberpunk-button bg-primary/80 text-white hover:text-white"
              >
                View Experience
              </a>
              <a
                href="#projects"
                className="cyberpunk-button bg-dark/80 text-white dark:bg-light/10 hover:text-white"
              >
                See Projects
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 animate-slide-up">
          <div className="cyberpunk-card bg-light/50 dark:bg-dark-lighter p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon="address-card" className="mr-2 text-primary" /> CONTACT
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FontAwesomeIcon icon="envelope" className="text-secondary mr-3 w-5" />
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon="phone" className="text-secondary mr-3 w-5" />
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-secondary mr-3 w-5" />
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={['fab', 'github']} className="text-secondary mr-3 w-5" />
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
              <FontAwesomeIcon icon="code" className="mr-2 text-primary" /> SKILLS
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary dark:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary dark:bg-secondary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#experience"
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <FontAwesomeIcon icon="chevron-down" className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;