import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header id="header" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon"></link>
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Profile Image */}
        <img
          src="/images/pf/sho5.jpg"
          alt="Profile"
          className="w-60 h-60 rounded-full mx-auto mb-8 object-cover shadow-lg"
        />

        {/* Name and Title */}
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Rashadul Islam
        </h1>
        <h2 className="text-2xl text-blue-600 dark:text-blue-400 mb-6">
          Full Stack Web Developer
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Passionate about creating innovative web solutions with modern technologies.
          Specialized in PHP, Laravel, React, and building scalable applications.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/khshourav"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/khrashadul"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:khrashadul@gmail.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="tel:+8801870207601"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Call"
          >
            <Phone className="w-8 h-8" />
          </a>
        </div>

        {/* Contact Me Button */}
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}