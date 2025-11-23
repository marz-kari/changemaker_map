import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import Leaderboard from '../components/Leaderboard';
import Badges from '../components/Badges';
import { mockUsers, mockBadges } from '../data/mockData';

export default function ProfilePage() {
  // Simulate current user (in real app, this would come from auth)
  const currentUser = mockUsers[0];
  const [showFriendsOnly, setShowFriendsOnly] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'badges' | 'leaderboard'>('overview');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="mb-8">
          <Profile user={currentUser} />
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === 'overview'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === 'badges'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Badges
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === 'leaderboard'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Leaderboard
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Points Allocation Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Points Allocation</h3>
              <p className="text-gray-600 mb-4">
                Click on your points to see where you've earned them and how you can use them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">From Events</div>
                  <div className="text-2xl font-bold text-green-600">
                    {Math.floor(currentUser.points * 0.7).toLocaleString()} pts
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">From Invites</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.floor(currentUser.points * 0.2).toLocaleString()} pts
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">From Badges</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.floor(currentUser.points * 0.1).toLocaleString()} pts
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/rewards"
                  className="btn-primary inline-block"
                >
                  View Rewards Store →
                </Link>
              </div>
            </div>

            {/* Posted Pictures Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Posted Pictures</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <img
                      src={`https://images.unsplash.com/photo-${1559827260 + i}?w=400`}
                      alt={`Your photo ${i}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
              {[1, 2, 3, 4].length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  No pictures posted yet. Start attending events and share your photos!
                </p>
              )}
            </div>
          </>
        )}

        {activeTab === 'badges' && (
          <Badges badges={mockBadges} userBadges={currentUser.badges} />
        )}

        {activeTab === 'leaderboard' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Leaderboards</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowFriendsOnly(false)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    !showFriendsOnly
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  Global
                </button>
                <button
                  onClick={() => setShowFriendsOnly(true)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    showFriendsOnly
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  Friends
                </button>
              </div>
            </div>
            <Leaderboard 
              users={mockUsers} 
              currentUserId={currentUser.id}
              showFriendsOnly={showFriendsOnly}
            />
          </div>
        )}
      </div>
    </div>
  );
}
