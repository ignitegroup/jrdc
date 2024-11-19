import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { DriverCard } from '../components/DriverCard';
import { useDrivers } from '../hooks/useDrivers';

export function DriversPage() {
  const { drivers, loading, error } = useDrivers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass ? driver.classes.includes(selectedClass) : true;
    return matchesSearch && matchesClass;
  });

  const allClasses = [...new Set(drivers.flatMap(driver => driver.classes))];

  return (
    <>
      <SEO
        title="Racing Drivers"
        description="Meet Jamaica's top racing drivers. Discover their achievements, racing history, and current competitions."
        keywords={[
          'Jamaican racing drivers',
          'JRDC drivers',
          'Dover Raceway drivers',
          'Caribbean racing talent',
          'motorsport athletes'
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Racing Drivers</h1>
          <p className="text-xl text-gray-600">
            Meet the talented drivers competing in Jamaica's premier racing events
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search drivers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Classes</option>
              {allClasses.map(className => (
                <option key={className} value={className}>{className}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Drivers Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            Error loading drivers. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDrivers.map(driver => (
              <DriverCard key={driver.id} driver={driver} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}