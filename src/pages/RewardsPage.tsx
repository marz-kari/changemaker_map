import Rewards from '../components/Rewards';
import { mockRewards, mockUsers } from '../data/mockData';

export default function RewardsPage() {
  // Simulate current user (in real app, this would come from auth)
  const currentUser = mockUsers[0];

  const handleRedeem = (reward: typeof mockRewards[0]) => {
    // In a real app, this would make an API call
    alert(`Redeemed ${reward.name} for ${reward.pointsCost} points!`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Rewards Store</h1>
          <p className="text-xl text-gray-600">
            Redeem your points for campus cash, dining dollars, and exclusive merch!
          </p>
        </div>
        <Rewards 
          rewards={mockRewards}
          userPoints={currentUser.points}
          onRedeem={handleRedeem}
        />
      </div>
    </div>
  );
}

