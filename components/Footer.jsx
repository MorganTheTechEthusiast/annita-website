"use client";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { countries } from "@/Constants/constant";
import Image from "next/image";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("us");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country.code);
    // Change the language of the page based on the selected country
    changeLanguage(country.lang);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="bg-gray-100 dark:bg-black/20 py-10">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Products Column */}
          <div>
            <h3 className="font-bold mb-4">{t("products")}</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/collect-payments">{t("collect_payments")}</Link>
              </li>
              <li>
                <Link href="/send-money">{t("send_money")}</Link>
              </li>
              <li>
                <Link href="/store">{t("store")}</Link>
              </li>
              <li>
                <Link href="/payment-links">{t("payment_links")}</Link>
              </li>
              <li>
                <Link href="/invoices">{t("invoices")}</Link>
              </li>
              <li>
                <Link href="/capital">{t("capital")}</Link>
              </li>
              <li>
                <Link href="/grow">{t("grow")}</Link>
              </li>
              <li>
                <Link href="/card-issuing">{t("card_issuing")}</Link>
              </li>
              <li>
                <Link href="/annita-app">{t("annita_app")}</Link>
              </li>
              <li>
                <Link href="/tuition">{t("tuition")}</Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold mb-4">{t("resources")}</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/pricing">{t("pricing")}</Link>
              </li>
              <li>
                <Link href="/support">{t("support")}</Link>
              </li>
              <li>
                <Link href="/blog">{t("blog")}</Link>
              </li>
              <li>
                <Link href="/integrations">{t("integrations")}</Link>
              </li>
              <li>
                <Link href="/why-you-got-charged">
                  {t("why_you_got_charged")}
                </Link>
              </li>
              <li>
                <Link href="/cookie-settings">{t("cookie_settings")}</Link>
              </li>
              <li>
                <Link href="/payment-protection-promise">
                  {t("payment_protection_promise")}
                </Link>
              </li>
              <li>
                <Link href="/dashboard-guide">{t("dashboard_guide")}</Link>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="font-bold mb-4">{t("developers")}</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/api-documentation">{t("api_documentation")}</Link>
              </li>
              <li>
                <Link href="/api-reference">{t("api_reference")}</Link>
              </li>
              <li>
                <Link href="/api-status">{t("api_status")}</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold mb-4">{t("company")}</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/customers">{t("customers")}</Link>
              </li>
              <li>
                <Link href="/careers">{t("careers")}</Link>
              </li>
              <li>
                <Link href="/press">{t("press")}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold mb-4">{t("contact")}</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <Link href="mailto:hi@flutterwavego.com">
                  {t("contact_email")}
                </Link>
              </li>
              <li>
                <Link href="/support">{t("x_support")}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Country Selector */}
        <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
          <button
            onClick={toggleDropdown}
            className="flex items-center border border-gray-300 rounded-md p-2 w-full md:w-auto justify-between"
          >
            <span className="flex items-center">
              <img
                src={`https://flagcdn.com/w20/${selectedCountry}.png`}
                alt="Country Flag"
                className="w-5 h-5 mr-2"
              />
              {
                countries.find((country) => country.code === selectedCountry)
                  ?.name
              }
            </span>
            <span className="text-gray-600 dark:text-gray-300">▼</span>
          </button>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-10 bg-white dark:bg-black rounded-md shadow-lg mt-1 w-full md:w-auto"
            >
              <ul className="py-2">
                {countries.map((country) => (
                  <li
                    key={country.code}
                    onClick={() => handleCountryChange(country)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <img
                      src={`https://flagcdn.com/w20/${country.code}.png`}
                      alt={`${country.name} Flag`}
                      className="w-5 h-5 mr-2"
                    />
                    {country.name}
                  </li>
                ))}
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
              Annita App licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
