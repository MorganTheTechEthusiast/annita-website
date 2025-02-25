"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Home,
  ShoppingCart,
  Users,
  Settings,
  Info,
  Mail,
  FileText,
  HelpCircle,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-earth-brown p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-2xl font-bold">Annita</h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <Home className="mr-2" /> Home
          </Link>
          <Link
            href="/marketplace"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <ShoppingCart className="mr-2" /> Marketplace
          </Link>
          <Link
            href="/community"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <Users className="mr-2" /> Community Hub
          </Link>
          <Link
            href="/thrive-toolkit"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <Settings className="mr-2" /> Thrive Toolkit
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <Info className="mr-2" /> About Us
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <Mail className="mr-2" /> Contact Us
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <FileText className="mr-2" /> Blog
          </Link>
          <Link
            href="/faq"
            className="text-white hover:text-vibrant-orange flex items-center"
          >
            <HelpCircle className="mr-2" /> FAQ
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-earth-brown p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <Home className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <ShoppingCart className="mr-2" /> Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <Users className="mr-2" /> Community Hub
              </Link>
            </li>
            <li>
              <Link
                href="/thrive-toolkit"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <Settings className="mr-2" /> Thrive Toolkit
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <Info className="mr-2" /> About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <Mail className="mr-2" /> Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <FileText className="mr-2" /> Blog
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-white hover:text-vibrant-orange flex items-center"
              >
                <HelpCircle className="mr-2" /> FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
