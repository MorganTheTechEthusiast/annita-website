"use client";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-gray-100 dark:bg-black/20 py-10">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Products Column */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/collect-payments">Collect Payments</Link>
              </li>
              <li>
                <Link href="/send-money">Send Money</Link>
              </li>
              <li>
                <Link href="/store">Store</Link>
              </li>
              <li>
                <Link href="/payment-links">Payment Links</Link>
              </li>
              <li>
                <Link href="/invoices">Invoices</Link>
              </li>
              <li>
                <Link href="/capital">Capital</Link>
              </li>
              <li>
                <Link href="/grow">Grow</Link>
              </li>
              <li>
                <Link href="/card-issuing">Card Issuing</Link>
              </li>
              <li>
                <Link href="/annita-app">Annita App</Link>
              </li>
              <li>
                <Link href="/tuition">Tuition</Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/integrations">Integrations</Link>
              </li>
              <li>
                <Link href="/why-you-got-charged">Why you got charged</Link>
              </li>
              <li>
                <Link href="/cookie-settings">Cookie settings</Link>
              </li>
              <li>
                <Link href="/payment-protection-promise">
                  Payment protection promise
                </Link>
              </li>
              <li>
                <Link href="/dashboard-guide">Dashboard Guide</Link>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="font-bold mb-4">Developers</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/api-documentation">API Documentation</Link>
              </li>
              <li>
                <Link href="/api-reference">API Reference</Link>
              </li>
              <li>
                <Link href="/api-status">API Status</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/customers">Customers</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="mailto:contact@annita.com">contact@annita.com</Link>
              </li>
              <li>
                <Link href="/x.com/@annita">X Support</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Country Selector */}
        <div className="mt-5 relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center border border-gray-300 rounded-md p-2 w-full justify-between"
          >
            <span className="flex items-center">
              <img
                src="/path-to-flag.png"
                alt="Country Flag"
                className="w-5 h-5 mr-2"
              />
              United States
            </span>
            <span className="text-gray-600 dark:text-gray-300">▼</span>
          </button>
          {isOpen && (
            <div className="absolute z-10 bg-white dark:bg-black rounded-md shadow-lg mt-1 w-full">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Cameroon
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Egypt
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Ghana
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Ivory Coast
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Kenya
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Malawi
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Mauritius
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Nigeria
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Rwanda
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Senegal
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  South Africa
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Tanzania
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Uganda
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  United Kingdom
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-5">
          <Link href="#" className="text-gray-600 dark:text-gray-300">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300">
            <FaYoutube />
          </Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300">
            <FaLinkedin />
          </Link>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © Annita {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="#" className="text-gray-600 dark:text-gray-300">
              Privacy notice
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300">
              Terms of use
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300">
              Cookie notice
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300">
              Merchant service agreement
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300">
              Send App licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
