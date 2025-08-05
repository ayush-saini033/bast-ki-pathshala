"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500  ${
        scrolled
          ? "bg-gradient-to-r from-transparent via-yellow-200/30 to-yellow-300/50 backdrop-blur-md shadow-2xl"
          : "bg-gradient-to-r from-transparent via-yellow-200/30 to-yellow-300/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo with glow effect */}
          <div>
            <Image
              src={"/image.png"}
              alt="logo"
              width={scrolled ? 100 : 200}
              height={scrolled ? 100 : 200}
              className={`transition-all duration-500 ease-in-out ${
                scrolled ? "" : "pt-[150px]"
              }`}
            />
          </div>

          {/* Hamburger Menu with morphing animation */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-black bg-yellow-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative">
              {menuOpen ? (
                <X className="w-6 h-6 animate-in spin-in-180 duration-300" />
              ) : (
                <Menu className="w-6 h-6 animate-in fade-in duration-300" />
              )}
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {[
              "Home",
              "About",
              "Our Certificate",
              "Donate",
              "Admin",
              "Registration",
            ].map((item, index) => (
              <div key={item} className="relative group">
                <a
                  href={
                    item === "Home"
                      ? "/"
                      : item === "Our Certificate"
                      ? "/certificate"
                      : `/${item.toLowerCase()}`
                  }
                  className="relative px-4 py-2 text-white font-semibold tracking-wide transition-colors duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-yellow-600/30 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <span className={`relative z-10 text-black`}>{item}</span>
                </a>
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-4">
            {[
              "Home",
              "About",
              "Our Certificate",
              "Donate",
              "Admin",
              "Registration",
            ].map((item, index) => (
              <div
                key={item}
                className={`transform transition-all duration-500 ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                <a
                  href={
                    item === "Home"
                      ? "/"
                      : item === "Our Certificate"
                      ? "/certificate"
                      : `/${item.toLowerCase()}`
                  }
                  className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-yellow-400/80 hover:to-yellow-500/20 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-black rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <span className="text-black font-semibold transition-colors duration-300">
                    {item}
                  </span>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20 animate-ping"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: "4s",
            }}
          ></div>
        ))}
      </div>
    </header>
  );
};

export default Header;
