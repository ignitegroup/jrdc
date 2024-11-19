import React from 'react';
import { Trophy, Star, Award, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { historicalEvents, legends } from '../data/history';

export function HistoryPage() {
  return (
    <>
      <SEO
        title="Racing History"
        description="Discover the rich history of motorsports in Jamaica, from its humble beginnings to becoming a cornerstone of Caribbean racing excellence."
        keywords={[
          'Jamaica racing history',
          'JRDC history',
          'Dover Raceway history',
          'Jamaican motorsport legends',
          'Caribbean racing heritage'
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Racing History</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the rich heritage of Jamaican motorsport, from its grassroots beginnings
            to becoming a cornerstone of Caribbean racing excellence.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Calendar className="h-8 w-8 text-red-600 mr-3" />
            Milestone Events
          </h2>
          <div className="space-y-12">
            {historicalEvents.map((event, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-red-600 ml-4"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full" />
                <div className="bg-white rounded-lg shadow-md p-6">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="mt-4 h-48 bg-black rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legends Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Trophy className="h-8 w-8 text-red-600 mr-3" />
            Racing Legends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legends.map((legend, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-black" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{legend.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{legend.era}</p>
                  <p className="text-gray-600 mb-4">{legend.bio}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center">
                      <Award className="h-5 w-5 text-red-600 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {legend.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <Star className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}