import { Badge as BadgeType } from '../data/mockData';

interface BadgesProps {
  badges: BadgeType[];
  userBadges: string[];
}

export default function Badges({ badges, userBadges }: BadgesProps) {
  const tierColors = {
    Bronze: 'bg-amber-100 text-amber-800 border-amber-300',
    Silver: 'bg-gray-100 text-gray-800 border-gray-300',
    Gold: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Platinum: 'bg-purple-100 text-purple-800 border-purple-300',
    Special: 'bg-green-100 text-green-800 border-green-300'
  };

  const categoryColors = {
    Event: 'bg-blue-50',
    Milestone: 'bg-purple-50',
    Special: 'bg-green-50'
  };

  const earnedBadges = badges.filter(b => userBadges.includes(b.name));
  const unearnedBadges = badges.filter(b => !userBadges.includes(b.name));

  return (
    <div className="space-y-6">
      {/* Earned Badges */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Badges ({earnedBadges.length})</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {earnedBadges.map((badge) => (
            <div
              key={badge.id}
              className={`bg-white rounded-lg shadow-md p-4 border-2 ${tierColors[badge.tier]} transition-transform hover:scale-105`}
            >
              <div className="text-center">
                <img
                  src={badge.imageUrl}
                  alt={badge.name}
                  className="w-24 h-24 mx-auto mb-2 rounded-full object-cover"
                />
                <h4 className="font-bold text-sm mb-1">{badge.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${tierColors[badge.tier]}`}>
                  {badge.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unearned Badges */}
      {unearnedBadges.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Available Badges ({unearnedBadges.length})</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {unearnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-gray-100 rounded-lg shadow-md p-4 border-2 border-gray-200 opacity-60"
              >
                <div className="text-center">
                  <img
                    src={badge.imageUrl}
                    alt={badge.name}
                    className="w-24 h-24 mx-auto mb-2 rounded-full object-cover grayscale"
                  />
                  <h4 className="font-bold text-sm mb-1 text-gray-600">{badge.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{badge.description}</p>
                  <p className="text-xs text-gray-500 italic">Requirement: {badge.requirement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

