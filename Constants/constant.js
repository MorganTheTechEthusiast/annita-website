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

// Dummy blog content
export const posts = [
  {
    title: "The Future of Payments in Africa",
    excerpt:
      "Exploring the trends and innovations shaping the payment landscape.",
    image: "/dummy-image1.jpg", // Replace with actual image paths
    link: "/blog/future-of-payments",
  },
  {
    title: "How to Start an E-commerce Business",
    excerpt: "A step-by-step guide to launching your online store.",
    image: "/dummy-image2.jpg", // Replace with actual image paths
    link: "/blog/start-ecommerce",
  },
  {
    title: "Understanding Cryptocurrency",
    excerpt: "A beginner's guide to the world of digital currencies.",
    image: "/dummy-image3.jpg", // Replace with actual image paths
    link: "/blog/understanding-crypto",
  },
  {
    title: "Tips for Managing Your Finances",
    excerpt: "Practical advice for budgeting and saving effectively.",
    image: "/dummy-image4.jpg", // Replace with actual image paths
    link: "/blog/managing-finances",
  },
];

// Dummy data for blog posts
export const post_id = {
  "future-of-payments": {
    title: "The Future of Payments in Africa",
    content:
      "Exploring the trends and innovations shaping the payment landscape.",
    image: "/dummy-image1.jpg", // Replace with actual image paths
  },
  "start-ecommerce": {
    title: "How to Start an E-commerce Business",
    content: "A step-by-step guide to launching your online store.",
    image: "/dummy-image2.jpg", // Replace with actual image paths
  },
  "understanding-crypto": {
    title: "Understanding Cryptocurrency",
    content: "A beginner's guide to the world of digital currencies.",
    image: "/dummy-image3.jpg", // Replace with actual image paths
  },
  "managing-finances": {
    title: "Tips for Managing Your Finances",
    content: "Practical advice for budgeting and saving effectively.",
    image: "/dummy-image4.jpg", // Replace with actual image paths
  },
};
