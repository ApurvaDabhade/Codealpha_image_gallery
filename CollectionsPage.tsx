import React from 'react';
import { Folder, Image, Star, Calendar } from 'lucide-react';

const CollectionsPage: React.FC = () => {
  const collections = [
    {
      id: 1,
      name: 'Natural Wonders',
      description: 'Breathtaking landscapes that showcase our planet\'s incredible beauty',
      imageCount: 45,
      coverImage: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'City Stories',
      description: 'Vibrant urban life, architecture, and the energy of city living',
      imageCount: 32,
      coverImage: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      createdAt: '2024-01-20'
    },
    {
      id: 3,
      name: 'Human Connections',
      description: 'Beautiful portraits celebrating diversity and human expressions',
      imageCount: 28,
      coverImage: 'https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      createdAt: '2024-01-25'
    },
    {
      id: 4,
      name: 'Creative Visions',
      description: 'Artistic and abstract photography that pushes creative boundaries',
      imageCount: 19,
      coverImage: 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      createdAt: '2024-02-01'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Curated Collections
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Explore handpicked photo collections that tell stories, spark emotions, and celebrate diverse perspectives
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={collection.coverImage}
                alt={collection.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {collection.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Image className="w-4 h-4" />
                    <span className="text-sm font-medium">{collection.imageCount} photos</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(collection.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {collection.name}
                </h3>
                <Folder className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                {collection.description}
              </p>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;