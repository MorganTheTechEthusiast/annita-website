"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black/20 py-10">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Products Column */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>Collect Payments</li>
              <li>Send Money</li>
              <li>Store</li>
              <li>Payment Links</li>
              <li>Invoices</li>
              <li>Capital</li>
              <li>Grow</li>
              <li>Card Issuing</li>
              <li>FaaS</li>
              <li>Disha</li>
              <li>Send App</li>
              <li>Tuition</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>Pricing</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Integrations</li>
              <li>Why you got charged</li>
              <li>Cookie settings</li>
              <li>Payment protection promise</li>
              <li>Dashboard Guide</li>
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="font-bold mb-4">Developers</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>API Documentation</li>
              <li>API Reference</li>
              <li>API Status</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>Customers</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Covid 19</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>hi@flutterwavego.com</li>
              <li>X Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © Annita. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-600 dark:text-gray-300">
              Privacy notice
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300">
              Terms of use
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300">
              Cookie notice
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300">
              Merchant service agreement
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300">
              Send App licenses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
