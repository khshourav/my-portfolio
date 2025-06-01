import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPhp,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    // Core Web Technologies
    { name: 'HTML', icon: faHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: faCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: faJs, color: 'text-yellow-500' },
    // Frontend Frameworks/Libraries
    { name: 'React', icon: faReact, color: 'text-blue-400' },
    {
      name: 'jQuery',
      icon: (
        <img
          src="/images/skills/jquery.svg"
          alt="jQuery"
          className="h-16 w-16 mx-auto"
        />
      ),
    },
    { name: 'Bootstrap', icon: faBootstrap, color: 'text-purple-600' },
    {
      name: 'Tailwind CSS',
      icon: (
        <img
          src="/images/skills/tailwind.svg"
          alt="Tailwind CSS"
          className="h-16 w-16 mx-auto"
        />
      ),
    },
    // Backend Technologies
    { name: 'PHP', icon: faPhp, color: 'text-indigo-500' },
    {
      name: 'Laravel',
      icon: (
        <img
          src="/images/skills/laravel.svg"
          alt="Laravel"
          className="h-16 w-16 mx-auto"
        />
      ),
    },
    { name: 'MySQL', icon: faDatabase, color: 'text-teal-500' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="relative group flex flex-col items-center"
              variants={item}
            >
              <div className="h-16 w-16 mb-2 transition-transform duration-300 group-hover:scale-110">
                {typeof skill.icon === 'object' && !skill.icon.props ? (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className={`h-16 w-16 ${skill.color}`}
                    size="4x"
                  />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-indigo-500">
                {skill.name}
              </span>
              <span className="absolute bottom-full mb-2 text-white bg-gray-900 dark:bg-gray-600 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}