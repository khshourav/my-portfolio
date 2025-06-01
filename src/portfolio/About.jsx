// About.jsx

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am an enthusiastic and dedicated web developer with hands-on experience building impactful projects using Laravel and React. Over the past 6 months, I have developed basic to intermediate-level applications, continuously honing my skills and adopting best development practices. My passion for learning drives me to stay updated with modern web technologies.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>Proficient in developing applications using PHP and Laravel framework</li>
              <li>Experience with JavaScript frameworks like React for interactive front-end development</li>
              <li>Knowledge of RESTful APIs, database design, and version control systems (Git)</li>
              <li>Strong problem-solving skills and a focus on clean, maintainable code</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Education
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>B.Sc. in Computer Science and Engineering - East West University</li>
              <li>Full Stack Web Development Course - Learn With Fiz</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Work Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am committed to writing clean, maintainable code and following best development practices. I thrive in collaborative environments and enjoy learning from more experienced developers. My goal is to contribute to impactful projects and grow as a Laravel developer.
            </p>
            <div className="text-center mt-8">
              <a
                href="/cv/Rashadul_Islam_CV_2025.pdf"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
