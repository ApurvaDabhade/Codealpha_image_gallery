import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

const NotificationPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAllow = () => {
    setIsVisible(false);
    // Here you would implement actual notification permission request
    console.log('Notifications allowed');
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-[#A4C3D5] p-2 rounded-full">
            <Bell className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 mb-1">Stay Updated!</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get notified about new products, offers, and health tips from Rosier Foods.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={handleAllow}
                className="bg-[#C7332F] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-300"
              >
                Allow
              </button>
              <button
                onClick={handleDismiss}
                className="text-gray-500 px-4 py-2 rounded-full text-sm font-medium hover:text-gray-700 transition-colors duration-300"
              >
                Not Now
              </button>
            </div>
          </div>
          
       <button
  onClick={handleDismiss}
  aria-label="Dismiss notification"
  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
>
  <X className="w-5 h-5" />
</button>

        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;