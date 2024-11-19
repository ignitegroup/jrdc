import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Car } from '../types';

interface CarSlideshowProps {
  cars: Car[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function CarSlideshow({ cars, currentIndex, onPrevious, onNext }: CarSlideshowProps) {
  return (
    <div className="relative h-full">
      {cars.map((car, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-full bg-black">
            {/* Fallback background pattern */}
            <div className="w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-300 to-gray-500" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
            <p className="text-gray-200">{car.specs[0]}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {cars.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}