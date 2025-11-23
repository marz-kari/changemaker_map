import { Link } from 'react-router-dom';
import Map from '../components/Map';
import Leaderboard from '../components/Leaderboard';
import { mockEvents, mockUsers } from '../data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Changemaker Map
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 animate-slide-up">
            Discover where change happens.
          </p>
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto mb-8">
            Connect with changemaking opportunities in San Diego. Earn points, make friends, and create positive change in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/map"
              className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all hover:shadow-xl hover:scale-105"
            >
              Explore the Map
            </Link>
            <Link
              to="/profile"
              className="px-8 py-4 bg-teal-500/20 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-teal-500/30 transition-all"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Interactive Event Map</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore changemaking opportunities across San Diego. Click on markers to learn more about each event.
            </p>
          </div>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Map events={mockEvents} />
          </div>
        </div>
      </section>

      {/* Global Leaderboard Preview */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Global Leaderboard</h2>
            <p className="text-xl text-gray-600">
              See who's making the biggest impact in our community
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Leaderboard users={mockUsers.slice(0, 5)} />
            <div className="text-center mt-6">
              <Link
                to="/profile"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                View Full Leaderboard →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ways to Get Involved</h2>
            <p className="text-xl text-gray-600">
              Discover other San Diego changemaking initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-soft rounded-lg p-8 card-hover">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">USD Changemaker Hub</h3>
              <p className="text-gray-600 mb-4">
                Connect with USD's changemaking initiatives and resources.
              </p>
              <a
                href="https://www.usdengage.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-gradient-soft rounded-lg p-8 card-hover">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Clothing Drives</h3>
              <p className="text-gray-600 mb-4">
                Participate in community clothing drives and sustainable fashion events.
              </p>
              <Link
                to="/map"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                Find Events →
              </Link>
            </div>
            <div className="bg-gradient-soft rounded-lg p-8 card-hover">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Community Events</h3>
              <p className="text-gray-600 mb-4">
                Join Greater San Diego changemaking initiatives and make a difference.
              </p>
              <Link
                to="/map"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                Explore Map →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Changemaker Map</h2>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Changemaker Map provides awareness to changemaking opportunities in San Diego through an interactive map. 
                  Our platform helps USD students easily discover and engage with community service initiatives, making 
                  positive action more accessible than ever.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Problem</h3>
                <p className="text-gray-600 leading-relaxed">
                  USD students want to make a difference, but our school has many resources that aren't easily accessible. 
                  Students have to dive deep into scattered websites and school-affiliated social media pages to find changemaking opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're building a comprehensive platform with all changemaking resources in one place. Through our 
                  interactive map, point system, and social features, we make it easy for students to discover, attend, 
                  and be rewarded for participating in changemaking opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  Changemaker Map is proudly partnered with USD's Changemaker Hub, working together to create a more 
                  engaged campus and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Have Any Questions?</h2>
          <p className="text-xl text-gray-600 mb-6">
            We'd love to hear from you! Reach out to us at:
          </p>
          <a
            href="mailto:changemakermap@sandiego.edu"
            className="text-2xl text-teal-600 hover:text-teal-700 font-semibold hover:underline"
          >
            changemakermap@sandiego.edu
          </a>
        </div>
      </section>
    </div>
  );
}

