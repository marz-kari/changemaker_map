import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import GalleryPage from './pages/GalleryPage';
import ProfilePage from './pages/ProfilePage';
import RewardsPage from './pages/RewardsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

