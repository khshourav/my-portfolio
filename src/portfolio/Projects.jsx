import { Github, Globe } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Business Application',
    description: 'A full-stack web application featuring a dynamic frontend with multiple customer-facing forms, including Application, Contact, Quote, and Complaint submissions, Email Notification, Submitted Data export in excel etc. The platform is supported by a robust backend admin panel that enables efficient management and processing of submitted data.',
    images: [
      './images/project/aqi/s1.png',
      './images/project/aqi/s2.png',
      './images/project/aqi/s3.png',
      './images/project/aqi/s4.png',
      './images/project/aqi/s5.png',
      './images/project/aqi/s6.png',
      './images/project/aqi/s7.png',
      './images/project/aqi/s8.png',
      './images/project/aqi/s9.png',
      './images/project/aqi/s10.png',
      './images/project/aqi/s11.png',
      './images/project/aqi/s12.png',
    ],
    technologies: ['Laravel', 'MySQL', 'React', 'Inertia.js'],
    demoUrl: 'https://aqiservices.net',
    githubUrl: 'https://github.com/khshourav/Business-Application',
    role: 'Full Stack Developer',
    challenges: 'Developed and integrated multiple form submissions with seamless backend processing. Implemented real-time data management for administrators.',
    features: [
      'A professional, fully responsive frontend showcasing company information and services.',
      'Multiple customer submission forms with structured data handling.',
      'Backend panel for efficient management, retrieval, and processing of submitted forms.',
      'Functionality to download, edit, and track submitted applications.',
      'Email Notification system when any form is submitted.',
      'Submitted data export in excel format.',
      'Integrated certificate verification system.',
      'Deployed and hosted on a live server, ensuring a production-ready solution.',
    ],
    notes: 'This is a fully functional business application currently in active use. I am contracted to implement additional upgrades, including email integration, automated certificate generation, and enhanced functionalities.',
  },
  {
    title: 'URL Shortener',
    description: 'Shorten long URLs by creating a short redirecting link.',
    images: [
      './images/project/png1b.png',
      './images/project/url.png',
      './images/project/url1.png',
    ],
    technologies: ['HTML', 'Tailwind', 'JavaScript', 'MySQL', 'Laravel'],
    demoUrl: 'https://uri.rf.gd/',
    githubUrl: 'https://github.com/khshourav/URL-shortener-by-Laravel',
    role: 'Full Stack Developer',
    challenges: 'Implemented URL shortening algorithms and real-time redirection.',
    features: [
      'Creates consistent short redirecting links',
      'Copy button for quick access',
      'Responsive design',
    ],
    notes: 'Planned to add user profiles with login/registration for saving URLs.',
  },
  {
    title: 'Task Management System',
    description: 'A task management system to add, edit, update, and complete tasks.',
    images: [
      './images/project/task1.png',
      './images/project/task1b.png',
      './images/project/task1c.png',
    ],
    technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'PHP', 'MySQL', 'JSON'],
    demoUrl: 'https://task.42web.io/',
    githubUrl: 'https://github.com/khshourav/Task-Management',
    role: 'Full Stack Developer',
    challenges: 'Built API for backend processing and implemented CRUD operations.',
    features: [
      'Responsive design',
      'Registration/login system',
      'User authentication',
      'Dynamic data fetching via API',
      'CRUD operations',
    ],
    notes: 'Built API for backend processing.',
  },
  {
    title: 'CRUD Application',
    description: 'A simple CRUD application to manage and manipulate records in a database.',
    images: [
      './images/project/crud1.png',
      './images/project/crud1b.png',
      './images/project/crud1c.png',
      './images/project/crud1d.png',
      './images/project/crud1e.png',
      './images/project/crud1f.png',
    ],
    technologies: ['Tailwind', 'PHP', 'MySQL'],
    demoUrl: 'https://scrud.free.nf/',
    githubUrl: 'https://github.com/khshourav/Basic-CRUD-with-PHP-and-MYSQL',
    role: 'Full Stack Developer',
    challenges: 'Implemented basic CRUD operations with form validation.',
    features: [
      'Responsive design',
      'Create, Read, Update, Delete operations',
      'MySQL database integration',
      'Form validation',
    ],
    notes: 'A basic project to understand and handle CRUD operations.',
  },
  {
    title: 'Country Information Application',
    description: 'Check various data like area, population, language, timezone, and borders of any country.',
    images: [
      './images/project/coun1.png',
      './images/project/coun1b.png',
      './images/project/coun1c.png',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JSON'],
    demoUrl: 'https://khshourav.github.io/Countries-API/',
    githubUrl: 'https://github.com/khshourav/Countries-API',
    role: 'Frontend Developer',
    challenges: 'Processed and handled REST API data.',
    features: [
      'Responsive design',
      'Processing and handling REST API',
    ],
    notes: 'This was my second API project, and working with APIs is fun!',
  },
  {
    title: 'Add to Cart Application',
    description: 'A basic application to calculate the total price of products added to the cart.',
    images: [
      './images/project/cart1.png',
      './images/project/cart1b.png',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoUrl: 'https://khshourav.github.io/Add-2-Cart-project--2-/',
    githubUrl: 'https://github.com/khshourav/Add-2-Cart-project--2-/',
    role: 'Frontend Developer',
    challenges: 'Implemented coupon functionality and dynamic price calculation.',
    features: [
      'Responsive design',
      'Applying coupon functionality',
    ],
    notes: 'One of my early projects. Planning to build a more complete version with backend support.',
  },
];

export default function Projects() {
  const [activeIndices, setActiveIndices] = useState(
    projects.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  const handlePrev = (projectIndex, imagesLength) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 ? imagesLength - 1 : prev[projectIndex] - 1,
    }));
  };

  const handleNext = (projectIndex, imagesLength) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === imagesLength - 1 ? 0 : prev[projectIndex] + 1,
    }));
  };

  const handleIndicatorClick = (projectIndex, imageIndex) => {
    setActiveIndices((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-gray-900 dark:text-white tracking-tight">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:rounded-none hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Carousel */}
              <div className="relative h-56 sm:h-64">
                {project.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`${project.title} - Image ${imageIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                      imageIndex === activeIndices[projectIndex] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                ))}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* <span className="text-white font-semibold">View Project</span> */}
                </div>
                <button
                  onClick={() => handlePrev(projectIndex, project.images.length)}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800/70 text-white rounded-full p-2 hover:bg-gray-900 transition-all"
                  aria-label="Previous Image"
                >
                  ←
                </button>
                <button
                  onClick={() => handleNext(projectIndex, project.images.length)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800/70 text-white rounded-full p-2 hover:bg-gray-900 transition-all"
                  aria-label="Next Image"
                >
                  →
                </button>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => handleIndicatorClick(projectIndex, imageIndex)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                        imageIndex === activeIndices[projectIndex] ? 'bg-blue-500' : 'bg-gray-400/50 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to image ${imageIndex + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col">
                {/* Title and Buttons Row */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4" /> Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-all duration-200 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Additional Details */}
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-3">
                  <p>
                    <strong>Role:</strong> {project.role}
                  </p>
                  <p>
                    <strong>Challenges:</strong> {project.challenges}
                  </p>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                      Key Features:
                    </h4>
                    <ul className="list-disc pl-4 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <strong>Notes:</strong> {project.notes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}