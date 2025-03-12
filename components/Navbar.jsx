"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav
      className={`backdrop-blur-md bg-white/30 dark:bg-black/30 p-4 shadow-md fixed w-full z-50 top-0 left-0 right-0`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" alt="Annita Logo" width={50} height={50} />
          <h1 className="text-gray-800 dark:text-white text-xl font-bold">
            Annita
          </h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-gray-800 transition-all dark:text-white hover:text-vibrant-purple flex items-center text-sm"
          >
            Home
          </Link>
          <Dropdown className="text-gray-800 transition-all dark:text-white hover:text-vibrant-purple flex items-center text-sm">
            Explore
          </Dropdown>
          <Link
            href="/thrive-toolkit"
            className="text-gray-800 transition-all dark:text-white hover:text-vibrant-purple flex items-center text-sm"
          >
            Thrive Toolkit
          </Link>
          <Link
            href="/about"
            className="text-gray-800 transition-all dark:text-white hover:text-vibrant-purple flex items-center text-sm"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 transition-all dark:text-white hover:text-vibrant-purple flex items-center text-sm"
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 transition-all dark:text-white hover:text-vibrant-purple flex items-center text-sm"
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className="text-gray-800 transition-all dark:text-white hover:text-vibrant-purple flex items-center text-sm"
          >
            FAQ
          </Link>
        </div>
        <div className="flex items-center">
          <Button
            onClick={toggleTheme}
            className="text-gray-100 dark:bg-gray-400 bg-black dark:text-black ml-4"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
          <div className="md:hidden ml-2">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-400 text-2xl p-2"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/30 dark:bg-black/30 p-4 z-10">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-800 dark:text-white hover:text-vibrant-purple transition-colors flex items-center text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Dropdown className="text-gray-800 dark:text-white hover:text-vibrant-purple flex items-center text-sm">
                Explore
              </Dropdown>
            </li>
            <li>
              <Link
                href="/thrive-toolkit"
                className="text-gray-800 dark:text-white hover:text-vibrant-purple flex items-center text-sm"
              >
                Thrive Toolkit
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-800 dark:text-white hover:text-vibrant-purple flex items-center text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-800 dark:text-white hover:text-vibrant-purple flex items-center text-sm"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-800 dark:text-white hover:text-vibrant-purple flex items-center text-sm"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-gray-800 dark:text-white hover:text-vibrant-purple flex items-center text-sm"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
