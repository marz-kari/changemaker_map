import { Event } from '../data/mockData';

interface EventCardProps {
  event: Event;
  onClick?: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const typeColors = {
    USD: 'bg-blue-100 text-blue-700',
    UM: 'bg-purple-100 text-purple-700',
    'Greater SD': 'bg-orange-100 text-orange-700'
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 card-hover cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[event.type]}`}>
          {event.type}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <span>📍</span>
          <span>{event.location.address}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <span>📅</span>
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1 text-green-600 font-semibold">
            <span>⭐</span>
            <span>{event.points} pts</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <span>⏱️</span>
            <span>{event.hours} hrs</span>
          </div>
        </div>
        
        {onClick && (
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
            View Details
          </button>
        )}
      </div>
    </div>
  );
}

