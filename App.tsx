import Navigation from './components/Navigation';
import Lightbox from './components/Lightbox';
import HomePage from './components/pages/HomePage';
import CollectionsPage from './components/pages/CollectionsPage';
import ArtistsPage from './components/pages/ArtistsPage';
import ExplorePage from './components/pages/ExplorePage';
import { useGallery } from './hooks/useGallery';
import { useNavigation } from './hooks/useNavigation';
import { sampleImages } from './utils/imageData';
import './tailwind.css';
import './index.css'; // if you're using your own styles


function App() {
  const { currentPage, navigateTo } = useNavigation();
  const {
    lightboxImage,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage
  } = useGallery(sampleImages);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onImageClick={openLightbox} />;
      case 'collections':
        return <CollectionsPage />;
      case 'artists':
        return <ArtistsPage />;
      case 'explore':
        return <ExplorePage />;
      default:
        return <HomePage onImageClick={openLightbox} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Nature Background with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1200225/pexels-photo-1200225.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          filter: 'blur(1px)',
        }}
      ></div>
      <div className="fixed inset-0 bg-gradient-to-br from-black/50 via-emerald-900/30 to-green-900/40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/25 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-lime-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-teal-400/15 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-emerald-400/12 rounded-full blur-xl animate-float-delayed"></div>
      
      <div className="relative z-10">
        <Navigation currentPage={currentPage} onNavigate={navigateTo} />
        
        {renderCurrentPage()}
        
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>
    </div>
  );
}

export default App;