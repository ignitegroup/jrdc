import React from 'react';
import { Trophy, Car, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Driver } from '../types';

interface DriverCardProps {
  driver: Driver;
}

export function DriverCard({ driver }: DriverCardProps) {
  return (
    <div className="relative group">
      <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {/* Card Header with Image */}
        <div className="relative h-64">
          <div className="absolute inset-0 bg-black">
            {/* Fallback background pattern */}
            <div className="w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-300 to-gray-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{driver.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {driver.classes.map((className, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-red-600 text-white px-2 py-1 rounded-full"
                    >
                      {className}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {driver.championships.map((_, index) => (
                  <Trophy key={index} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 bg-white">
          {/* Current Car */}
          <div className="mb-4">
            <div className="flex items-center text-gray-700 mb-2">
              <Car className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-semibold">Current Car</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="font-medium text-gray-800">{driver.cars[0]?.name || 'N/A'}</p>
              <p className="text-sm text-gray-600 mt-1">{driver.cars[0]?.specs[0]}</p>
            </div>
          </div>

          {/* Recent Achievement */}
          <div className="mb-6">
            <div className="flex items-center text-gray-700 mb-2">
              <Trophy className="h-5 w-5 text-red-600 mr-2" />
              <span className="font-semibold">Latest Achievement</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-gray-800">{driver.achievements[0]}</p>
            </div>
          </div>

          {/* View Profile Button */}
          <Link
            to={`/drivers/${driver.id}`}
            className="block w-full bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center font-semibold"
          >
            View Full Profile
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}