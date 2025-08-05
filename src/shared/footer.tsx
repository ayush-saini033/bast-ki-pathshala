import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Donate", href: "/donate" },
    { name: "Our Certificate", href: "/certificate" },
    { name: "Registration", href: "/registration" },
    { name: "Admin", href: "/admin" },
  ];

  const programs = [
    { name: "Primary Education", href: "/programs/primary" },
    { name: "Skill Development", href: "/programs/skills" },
    { name: "Health & Nutrition", href: "/programs/health" },
    { name: "Women Empowerment", href: "/programs/women" },
    { name: "Community Development", href: "/programs/community" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", href: "https://facebook.com" },
    { icon: <FaInstagram />, name: "Instagram", href: "https://instagram.com" },
    { icon: <FaTwitter />, name: "Twitter", href: "https://twitter.com" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", href: "https://linkedin.com" },
    { icon: <FaYoutube />, name: "YouTube", href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 relative underline underline-offset-5">
              Basti Ki Pathshala
              {/* <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-yellow-400" /> */}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering underprivileged children through quality education and
              holistic development. We believe every child deserves a chance to
              learn, grow, and build a brighter future.
            </p>

            {/* Founder */}
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-700 transition">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  F
                </div>
                <div>
                  <p className="text-yellow-400 font-semibold">Founded by</p>
                  <p className="text-white font-medium">Dr. Rajesh Kumar</p>
                  <p className="text-gray-400 text-sm">
                    Social Activist & Educator
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 relative underline underline-offset-5">
              Quick Links
            
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 flex items-center group transition"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 relative underline underline-offset-5">
              Our Programs
            
            </h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-yellow-400 flex items-center group transition"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + Social + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 relative underline underline-offset-5">
              Contact Us
            
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 text-lg mt-1" />
                <div>
                  <p className="text-gray-300">123 Education Street</p>
                  <p className="text-gray-300">New Delhi, India - 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-400 text-lg" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400 text-lg" />
                <p className="text-gray-300">info@bastikipathshala.org</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 relative underline underline-offset-5">
              Follow Us
            
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-yellow-400 transition hover:scale-110 hover:shadow-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Join our community and stay updated with our latest initiatives.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 relative underline underline-offset-5">
              Newsletter
            
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates on our programs and impact stories.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-yellow-400 text-white"
              />
              <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition-colors">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pt-8 border-t border-gray-700">
          {[
            { value: "500+", label: "Children Educated" },
            { value: "15+", label: "Communities Served" },
            { value: "50+", label: "Volunteers" },
            { value: "8", label: "Years of Impact" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Basti Ki Pathshala. All rights reserved. |
            <a href="/privacy" className="hover:text-yellow-400 ml-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="/terms" className="hover:text-yellow-400 ml-1">
              Terms of Service
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            Made with{" "}
            <span className="text-yellow-400 font-semibold">heart</span> for a
            better tomorrow
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
