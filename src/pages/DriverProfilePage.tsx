import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Trophy, Car, Star, Award, Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useDrivers } from '../hooks/useDrivers';

export function DriverProfilePage() {
  const { id } = useParams<{ id: string }>();
  const { drivers, loading, error } = useDrivers();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const driver = drivers.find(d => d.id === id);
  
  useEffect(() => {
    if (!driver) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === driver.cars.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, [driver]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" />
      </div>
    );
  }

  if (error || !id || !driver) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading driver profile</p>
      </div>
    );
  }

  const similarDrivers = drivers
    .filter(d => d.id !== driver.id && d.classes.some(c => driver.classes.includes(c)))
    .slice(0, 3);

  return (
    <>
      <SEO
        title={driver.name}
        description={`Learn about ${driver.name}, professional racing driver competing in ${driver.classes.join(', ')}. View career achievements, racing history, and current vehicles.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-12 bg-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          
          {/* Car Image Slideshow */}
          <div className="relative h-full">
            {driver.cars.map((car, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="h-full bg-black" />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentImageIndex(prev => prev === 0 ? driver.cars.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={() => setCurrentImageIndex(prev => prev === driver.cars.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Slideshow Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {driver.cars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Driver Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <h1 className="text-4xl font-bold text-white mb-4">{driver.name}</h1>
            <div className="flex flex-wrap gap-2">
              {driver.classes.map((className, index) => (
                <span
                  key={index}
                  className="text-sm font-medium bg-red-600 text-white px-3 py-1 rounded-full"
                >
                  {className}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bio and Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Biography</h2>
              <p className="text-gray-700">{driver.bio}</p>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Trophy className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Achievements</h2>
              </div>
              <ul className="space-y-2">
                {driver.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Highlights */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Career Highlights</h2>
              </div>
              <ul className="space-y-2">
                {driver.careerHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cars */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Car className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Racing Cars</h2>
              </div>
              <div className="space-y-6">
                {driver.cars.map((car, index) => (
                  <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                    <h3 className="text-xl font-semibold mb-3">{car.name}</h3>
                    <div className="h-48 bg-black rounded-lg mb-3" />
                    <ul className="space-y-1">
                      {car.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="text-gray-700">• {spec}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            {/* Championships */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Championships</h2>
              <div className="space-y-3">
                {driver.championships.map((championship, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{championship.title}</span>
                    <span className="text-red-600">{championship.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Follow {driver.name}</h2>
              <div className="flex space-x-4">
                {driver.socialLinks.facebook && (
                  <a
                    href={driver.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                )}
                {driver.socialLinks.instagram && (
                  <a
                    href={driver.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                )}
                {driver.socialLinks.twitter && (
                  <a
                    href={driver.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>

            {/* Similar Drivers */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Similar Drivers</h2>
              <div className="space-y-4">
                {similarDrivers.map(similarDriver => (
                  <Link
                    key={similarDriver.id}
                    to={`/drivers/${similarDriver.id}`}
                    className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-black rounded-full mr-4" />
                      <div>
                        <h3 className="font-semibold">{similarDriver.name}</h3>
                        <p className="text-sm text-gray-600">
                          {similarDriver.classes.join(' • ')}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}