import React, { useState } from 'react';
import { Search, Compass, TrendingUp, Clock, Star } from 'lucide-react';

const ExplorePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('trending');


  const exploreCategories = [
    {
      id: 1,
      title: 'What\'s Hot',
      description: 'Most loved photos from our community this week',
      icon: TrendingUp,
      count: 1250,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Just Added',
      description: 'Fresh perspectives and new stories just shared',
      icon: Clock,
      count: 89,
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Staff Picks',
      description: 'Exceptional photos chosen by our community team',
      icon: Star,
      count: 156,
      image: 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Community Favorites',
      description: 'The photos our community can\'t stop loving',
      icon: Star,
      count: 892,
      image: 'https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filters = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Recent', icon: Clock },
    { id: 'popular', label: 'Popular', icon: Star },
    { id: 'featured', label: 'Featured', icon: Compass }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <Compass className="w-12 h-12 text-emerald-400 mr-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Explore
          </h1>
        </div>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
          Discover inspiring photography, trending content, and hidden gems from our global community
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
          <input
            type="text"
            placeholder="What inspires you today? Search photos, artists, or themes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-6 py-4 bg-black/30 backdrop-blur-lg border border-white/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:border-emerald-300/70 transition-all duration-300 text-white placeholder-white/70 text-lg"
          />
        </div>

        {/* Trending Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {['Nature', 'People', 'Street Life', 'Wildlife', 'Buildings', 'Art', 'Animals', 'Cities', 'Sunsets', 'Moments'].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 bg-black/25 backdrop-blur-sm border border-white/30 rounded-xl text-white hover:text-emerald-200 hover:bg-black/40 hover:border-emerald-300/50 transition-all duration-300 font-medium text-sm"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-black/25 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg'
                  : 'text-white hover:text-emerald-200 hover:bg-black/30'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Explore Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {exploreCategories.map((category) => (
          <div
            key={category.id}
            className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-4 right-4">
                <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full p-2">
                  <category.icon className="w-5 h-5 text-emerald-300" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-white/70 text-sm mb-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-300 font-semibold text-sm">
                    {category.count} photos
                  </span>
                  <button className="text-white hover:text-emerald-300 transition-colors duration-300">
                    <Compass className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-black/25 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
        <Compass className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Discover Something Amazing?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join our community of photography lovers discovering incredible visual stories every day
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105">
            Start Exploring
          </button>
          <button className="bg-black/30 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-black/40 hover:border-emerald-300/50 transition-all duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;