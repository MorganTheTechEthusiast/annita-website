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

export const services = [
  {
    icon: (
      <FaCreditCard className="text-vibrant-orange text-4xl mb-4 text-center" />
    ),
    title: "Online Checkout",
    description:
      "Our online checkout features our smart payment ordering system, incredible speed, and beautiful simplicity.",
    buttonText: "Get Started",
  },
  {
    icon: <FaMoneyBillWave className="text-vibrant-orange text-4xl mb-4" />,
    title: "Accept Payments",
    description:
      "Easily receive money from anyone, anywhere in the world via our multitude of secure payment methods.",
    buttonText: "Learn More >",
  },
  {
    icon: <FaHandshake className="text-vibrant-orange text-4xl mb-4" />,
    title: "Transfers (Payout)",
    description:
      "Make single or bulk transfers to bank accounts from your Flutterwave dashboard.",
    buttonText: "Learn More >",
  },
];
