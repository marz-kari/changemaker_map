import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">CM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Changemaker Map</h1>
              <p className="text-xs text-gray-500">Discover where change happens.</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Map
            </Link>
            <Link
              to="/gallery"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/gallery')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/profile"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/profile')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Profile
            </Link>
            <Link
              to="/rewards"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive('/rewards')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Rewards
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

