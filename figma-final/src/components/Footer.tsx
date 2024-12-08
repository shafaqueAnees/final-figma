import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 w-full-[1440] h-[124px]">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Vision */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
            <p className="text-sm text-gray-600">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">About</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">Community</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">Socials</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">
            © 2022 MORENT. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
