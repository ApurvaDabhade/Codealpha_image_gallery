import React from 'react';
import { User, Camera, Heart, MapPin, Award } from 'lucide-react';

const ArtistsPage: React.FC = () => {
  const artists = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Nature photographer sharing the wonder and tranquility of our natural world',
      location: 'Colorado, USA',
      followers: 12500,
      photos: 89,
      likes: 45600,
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      coverPhoto: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      specialties: ['Landscape', 'Nature', 'Wildlife']
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'Street photographer documenting the vibrant energy and stories of city life',
      location: 'New York, USA',
      followers: 8900,
      photos: 156,
      likes: 32400,
      avatar: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      coverPhoto: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: false,
      specialties: ['Urban', 'Architecture', 'Street']
    },
    {
      id: 3,
      name: 'Alice Brown',
      bio: 'Creative artist transforming everyday moments into extraordinary visual poetry',
      location: 'London, UK',
      followers: 15200,
      photos: 73,
      likes: 58900,
      avatar: 'https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&w=400',
      coverPhoto: 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      specialties: ['Abstract', 'Art', 'Creative']
    },
    {
      id: 4,
      name: 'Chris Green',
      bio: 'Portrait artist celebrating the beauty and diversity of human experiences',
      location: 'Paris, France',
      followers: 11800,
      photos: 124,
      likes: 41200,
      avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=400',
      coverPhoto: 'https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&w=800',
      verified: true,
      specialties: ['Portrait', 'Fashion', 'Editorial']
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Amazing Creators
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Meet the incredible photographers and artists who bring these visual stories to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Cover Photo */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={artist.coverPhoto}
                alt={`${artist.name}'s work`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Artist Info */}
            <div className="p-6 relative">
              {/* Avatar */}
              <div className="absolute -top-12 left-6">
                <div className="relative">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="w-20 h-20 rounded-full border-4 border-white/20 object-cover"
                  />
                  {artist.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-12">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {artist.name}
                    </h3>
                    <div className="flex items-center text-white/70 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{artist.location}</span>
                    </div>
                  </div>
                  <User className="w-6 h-6 text-emerald-400" />
                </div>

                <p className="text-white/80 mb-4 leading-relaxed">
                  {artist.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {artist.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-400/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Camera className="w-4 h-4 text-emerald-400 mr-1" />
                      <span className="text-lg font-bold text-white">{artist.photos}</span>
                    </div>
                    <span className="text-white/60 text-sm">Photos</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <User className="w-4 h-4 text-emerald-400 mr-1" />
                      <span className="text-lg font-bold text-white">{formatNumber(artist.followers)}</span>
                    </div>
                    <span className="text-white/60 text-sm">Followers</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Heart className="w-4 h-4 text-emerald-400 mr-1" />
                      <span className="text-lg font-bold text-white">{formatNumber(artist.likes)}</span>
                    </div>
                    <span className="text-white/60 text-sm">Likes</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105">
                  Meet This Artist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;