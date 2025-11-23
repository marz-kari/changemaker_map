import { useState } from 'react';

interface MapFiltersProps {
  onTypeChange: (type: 'USD' | 'UM' | 'Greater SD' | 'All') => void;
  onDaysChange: (days: number | null) => void;
  onLocationChange: (location: string) => void;
  selectedType: 'USD' | 'UM' | 'Greater SD' | 'All';
  selectedDays: number | null;
  selectedLocation: string;
}

export default function MapFilters({
  onTypeChange,
  onDaysChange,
  onLocationChange,
  selectedType,
  selectedDays,
  selectedLocation
}: MapFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const locationOptions = ['All', 'Downtown', 'USD Campus', 'North County'];

  return (
    <div className="absolute top-4 right-4 z-[1000]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-lg shadow-lg px-4 py-2 font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center space-x-2"
      >
        <span>Filters</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="mt-2 bg-white rounded-lg shadow-xl p-4 min-w-[250px] space-y-4">
          {/* Event Type Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Type</label>
            <div className="space-y-2">
              {(['All', 'USD', 'UM', 'Greater SD'] as const).map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="eventType"
                    value={type}
                    checked={selectedType === type}
                    onChange={() => onTypeChange(type)}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Days Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Time Range</label>
            <select
              value={selectedDays || ''}
              onChange={(e) => onDaysChange(e.target.value ? parseInt(e.target.value) : null)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">All upcoming events</option>
              <option value="7">Next 7 days</option>
              <option value="14">Next 2 weeks</option>
              <option value="30">Next month</option>
              <option value="90">Next 3 months</option>
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => onLocationChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              onTypeChange('All');
              onDaysChange(null);
              onLocationChange('All');
            }}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

