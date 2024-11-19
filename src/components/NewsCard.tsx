import React from 'react';
import type { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-2">
          {news.category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
        <p className="text-gray-600 mb-3">{news.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{news.date}</span>
          <button className="text-red-600 hover:text-red-700 font-medium">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}