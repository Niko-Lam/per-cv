import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useData } from '../context/DataContext';

const Footer = () => {
  const { personalInfo } = useData();

  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8 bg-dark-lighter text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-20"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gradient">{personalInfo.name}</h2>
            <p className="text-gray-300 max-w-md">
              {personalInfo.title} with expertise in building responsive,
              user-focused interfaces using modern web technologies.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-xl" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon icon="envelope" className="text-xl" />
              </a>
            </div>
          </div>

          <div className="text-right">
            <a
              href="#"
              className="inline-block text-gray-400 hover:text-primary transition-colors"
            >
              <FontAwesomeIcon icon="arrow-up" className="mr-2" /> Back to top
            </a>
            <p className="mt-6 text-gray-400">
              &copy; 2025 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;