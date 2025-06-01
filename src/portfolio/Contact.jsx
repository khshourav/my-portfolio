import React from 'react';
import { Mail, Phone } from 'lucide-react'; // Import icons from Lucide React

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xyzkdyjj" // Replace with your Formspree endpoint
            method="POST"
            className="space-y-6"
          >
            {/* Hidden input for form name (optional) */}
            <input type="hidden" name="_formname" value="contact-form" />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // Required for Formspree
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Required for Formspree
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message" // Required for Formspree
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Email and Phone Section */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Or reach out directly:
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* Email */}
              <a
                href="mailto:khrashadul@gmail.com"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>khrashadul@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801870207601"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>+8801870207601</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}