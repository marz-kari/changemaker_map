import { Reward } from '../data/mockData';

interface RewardsProps {
  rewards: Reward[];
  userPoints: number;
  onRedeem?: (reward: Reward) => void;
}

export default function Rewards({ rewards, userPoints, onRedeem }: RewardsProps) {
  const categoryColors = {
    'Campus Cash': 'bg-blue-100 text-blue-700',
    'Dining Dollars': 'bg-green-100 text-green-700',
    'Merch': 'bg-purple-100 text-purple-700'
  };

  const canAfford = (pointsCost: number) => userPoints >= pointsCost;

  return (
    <div className="space-y-6">
      {/* Points Balance */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">{userPoints.toLocaleString()}</div>
          <div className="text-xl font-medium">Available Points</div>
          <p className="text-green-100 mt-2">Redeem points for rewards below</p>
        </div>
      </div>

      {/* Rewards by Category */}
      <div className="space-y-8">
        {(['Campus Cash', 'Dining Dollars', 'Merch'] as const).map((category) => {
          const categoryRewards = rewards.filter(r => r.category === category);
          if (categoryRewards.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryRewards.map((reward) => (
                  <div
                    key={reward.id}
                    className={`bg-white rounded-lg shadow-md p-6 card-hover ${
                      !canAfford(reward.pointsCost) ? 'opacity-60' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 flex-1">{reward.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category]}`}>
                        {category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{reward.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">
                        {reward.pointsCost.toLocaleString()} pts
                      </div>
                      <button
                        onClick={() => onRedeem?.(reward)}
                        disabled={!canAfford(reward.pointsCost)}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                          canAfford(reward.pointsCost)
                            ? 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {canAfford(reward.pointsCost) ? 'Redeem' : 'Insufficient Points'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

