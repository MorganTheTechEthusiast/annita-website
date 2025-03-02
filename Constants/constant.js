import { FaCreditCard, FaMoneyBillWave, FaHandshake } from "react-icons/fa";
import { FaShoppingCart, FaUsers, FaTools } from "react-icons/fa";

export const features = [
  {
    icon: <FaShoppingCart className="text-vibrant-orange text-4xl mb-4" />,
    title: "E-commerce Marketplace",
    description:
      "Explore unique African goods ranging from crafts to local flavors.",
  },
  {
    icon: <FaUsers className="text-vibrant-orange text-4xl mb-4" />,
    title: "Community Hub",
    description:
      "Create and join communities that resonate with the African spirit.",
  },
  {
    icon: <FaTools className="text-vibrant-orange text-4xl mb-4" />,
    title: "Thrive Toolkit",
    description: "Access tools for personal development and business growth.",
  },
];

export const countries = [
  { name: "United States", code: "us" },
  { name: "Cameroon", code: "cm" },
  { name: "Egypt", code: "eg" },
  { name: "Ghana", code: "gh" },
  { name: "Ivory Coast", code: "ci" },
  { name: "Kenya", code: "ke" },
  { name: "Malawi", code: "mw" },
  { name: "Mauritius", code: "mu" },
  { name: "Liberia", code: "lr" },
  { name: "Rwanda", code: "rw" },
  { name: "Senegal", code: "sn" },
  { name: "South Africa", code: "za" },
  { name: "Tanzania", code: "tz" },
  { name: "Uganda", code: "ug" },
  { name: "United Kingdom", code: "gb" },
  { name: "Spain", code: "es" },
  { name: "France", code: "fr" },
];

export const services = [
  {
    icon: (
      <FaCreditCard className="text-vibrant-orange text-4xl mb-4 text-center" />
    ),
    title: "Online Checkout",
    description:
      "Our online checkout integrates a smart payment ordering system that ensures incredible speed and elegant simplicity. It is meticulously designed to enhance your revenue while delivering an exceptional payment experience for your customers.",
    buttonText: "Get Started",
  },
  {
    icon: <FaMoneyBillWave className="text-vibrant-orange text-4xl mb-4" />,
    title: "Accept Payments",
    description:
      "Easily receive money from anyone, anywhere in the world via our multitude of secure payment methods, ensuring safety and convenience for all transactions while providing a seamless experience for both senders and recipients.",
    buttonText: "Learn More >",
  },
  {
    icon: <FaHandshake className="text-vibrant-orange text-4xl mb-4" />,
    title: "Transfers (Payout)",
    description:
      "Effortlessly execute single or bulk transfers to bank accounts directly from your Annita dashboard, streamlining your financial operations with ease and efficiency.",
    buttonText: "Learn More >",
  },
];
