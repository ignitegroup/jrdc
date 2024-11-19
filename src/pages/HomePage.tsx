import React from 'react';
import { SEO } from '../components/SEO';
import { Banner } from '../components/Banner';
import { Trophy } from 'lucide-react';

export function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Experience the thrill of Jamaican motorsports with the Jamaica Race Drivers Club. Join us for exciting racing events at Dover Raceway."
      />
      
      <div className="min-h-screen">
        <Banner />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Jamaica Race Drivers Club
            </h1>
            <p className="text-xl text-gray-600">
              Experience the thrill of Jamaican motorsports at its finest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Trophy className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Racing Excellence</h3>
              <p className="text-gray-600">
                Home to Jamaica's finest racing talents and future champions
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Trophy className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dover Raceway</h3>
              <p className="text-gray-600">
                Jamaica's premier racing facility hosting exciting events
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Trophy className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join JRDC</h3>
              <p className="text-gray-600">
                Become part of Jamaica's vibrant racing community
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}