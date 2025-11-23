import { User } from '../data/mockData';

interface LeaderboardProps {
  users: User[];
  currentUserId?: string;
  showFriendsOnly?: boolean;
}

export default function Leaderboard({ users, currentUserId, showFriendsOnly = false }: LeaderboardProps) {
  // Get current user
  const currentUser = currentUserId ? users.find(u => u.id === currentUserId) : null;
  
  // Filter friends if needed
  let displayUsers = users;
  if (showFriendsOnly && currentUser) {
    displayUsers = users.filter(u => 
      currentUser.friends.includes(u.id) || u.id === currentUserId
    );
  }

  // Sort by points
  const sortedUsers = [...displayUsers].sort((a, b) => b.points - a.points);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-50 border-yellow-200';
    if (rank === 2) return 'bg-gray-50 border-gray-200';
    if (rank === 3) return 'bg-orange-50 border-orange-200';
    return 'bg-white border-gray-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {showFriendsOnly ? 'Friends Leaderboard' : 'Global Leaderboard'}
      </h2>
      
      <div className="space-y-3">
        {sortedUsers.map((user, index) => {
          const rank = index + 1;
          const isCurrentUser = user.id === currentUserId;
          
          return (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                getRankColor(rank)
              } ${isCurrentUser ? 'ring-2 ring-green-500' : ''}`}
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="text-2xl font-bold text-gray-400 w-12 text-center">
                  {getRankIcon(rank)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-800">
                      {user.username}
                      {isCurrentUser && <span className="text-green-600 ml-2">(You)</span>}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span>{user.eventsAttended} events</span>
                    <span>{user.hoursLogged} hours</span>
                    <span>{user.badges.length} badges</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {user.points.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">points</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

