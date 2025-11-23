import { User } from '../data/mockData';

interface ProfileProps {
  user: User;
  onEdit?: () => void;
}

export default function Profile({ user, onEdit }: ProfileProps) {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{user.username}</h2>
              <p className="text-gray-500 mt-1">USD Student</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {user.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {onEdit && (
            <button
              onClick={onEdit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            {user.points.toLocaleString()}
          </div>
          <div className="text-gray-600 font-medium">Points</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {user.eventsAttended}
          </div>
          <div className="text-gray-600 font-medium">Events Attended</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            {user.hoursLogged}
          </div>
          <div className="text-gray-600 font-medium">Hours Logged</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-orange-600 mb-2">
            {user.badges.length}
          </div>
          <div className="text-gray-600 font-medium">Badges</div>
        </div>
      </div>

      {/* Friends Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Friends</h3>
        {user.friends.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {user.friends.map((friendId) => {
              const friendName = user.friendNames?.[friendId] || `Friend #${friendId}`;
              return (
                <div
                  key={friendId}
                  className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium"
                >
                  {friendName}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500">No friends yet. Start connecting with others!</p>
        )}
      </div>
    </div>
  );
}
