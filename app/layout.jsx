import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["700", "500", "400", "300", "100"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Annita | Africa's Digital Heartbeat",
  description:
    "Annita isn't your typical SaaS platform. It's a digital powerhouse that seamlessly combines African authenticity with cutting-edge innovation",
};

const Layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased bg-gray-100 text-gray-800`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
