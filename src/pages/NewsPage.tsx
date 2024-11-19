import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SEO } from '../components/SEO';
import { NewsCard } from '../components/NewsCard';
import { useNews } from '../hooks/useNews';

export function NewsPage() {
  const { news, loading, error } = useNews();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Generate dynamic meta description based on latest news
  const latestNews = news.slice(0, 3).map(n => n.title).join(', ');
  const metaDescription = `Latest racing news from Jamaica Race Drivers Club: ${latestNews}. Stay updated with race results, driver updates, and motorsport coverage.`;

  const categories = [...new Set(news.map(item => item.category))];

  return (
    <>
      <SEO
        title="Racing News"
        description={metaDescription}
        keywords={[
          'Jamaica racing news',
          'JRDC updates',
          'Dover Raceway results',
          'motorsport news Jamaica',
          'racing coverage',
          'driver updates',
          'race results'
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Racing News</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest from Jamaica's racing scene.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-4 pr-8 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            Error loading news. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(item => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}