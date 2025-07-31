import React from 'react';
import { Grid3X3, Layout, List } from 'lucide-react';
import { ViewMode } from '../types';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewModeChange }) => {
  const viewModes: { mode: ViewMode; icon: React.ReactNode; label: string }[] = [
    { mode: 'grid', icon: <Grid3X3 className="w-5 h-5" />, label: 'Grid' },
    { mode: 'masonry', icon: <Layout className="w-5 h-5" />, label: 'Masonry' },
    { mode: 'list', icon: <List className="w-5 h-5" />, label: 'List' }
  ];

  const handleViewModeClick = (mode: ViewMode) => {
    onViewModeChange(mode);
    console.log(`Switching to ${mode} view`);
  };

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-black/25 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/20">
        {viewModes.map(({ mode, icon, label }) => (
          <button
            key={mode}
            onClick={() => handleViewModeClick(mode)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
              viewMode === mode
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg transform scale-105'
                : 'text-white hover:text-emerald-200 hover:bg-black/30'
            }`}
            title={label}
          >
            {icon}
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewToggle;