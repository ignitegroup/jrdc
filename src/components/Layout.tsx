import React from 'react';
import { Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../data/menuItems';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600' : 'text-gray-700 hover:text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link to="/" className="flex items-center">
              <Trophy className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">JRDC</span>
            </Link>
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path} className={isActive(item.path)}>
                  {item.label}
                </Link>
              ))}
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                Join JRDC
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-red-600" />
                <span className="ml-2 text-xl font-bold">JRDC</span>
              </div>
              <p className="text-gray-400">Promoting excellence in Jamaican motorsports since 1990.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Dover Raceway</li>
                <li>St. Ann, Jamaica</li>
                <li>info@jrdc.org</li>
                <li>+1 (876) 555-0123</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest racing news and events.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Jamaica Race Drivers Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}