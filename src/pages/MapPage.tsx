import { useState } from 'react';
import Map from '../components/Map';
import EventCard from '../components/EventCard';
import { mockEvents, Event } from '../data/mockData';

export default function MapPage() {
  const [selectedType, setSelectedType] = useState<'USD' | 'UM' | 'Greater SD' | 'All'>('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = selectedType === 'All' 
    ? mockEvents 
    : mockEvents.filter(event => event.type === selectedType);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Map</h1>
          <p className="text-xl text-gray-600">
            Explore sustainability events across San Diego
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setSelectedType('All')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedType === 'All'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-green-50 border-2 border-gray-200'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setSelectedType('USD')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedType === 'USD'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-blue-50 border-2 border-gray-200'
            }`}
          >
            USD Events
          </button>
          <button
            onClick={() => setSelectedType('UM')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedType === 'UM'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-purple-50 border-2 border-gray-200'
            }`}
          >
            UM Events
          </button>
          <button
            onClick={() => setSelectedType('Greater SD')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              selectedType === 'Greater SD'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-orange-50 border-2 border-gray-200'
            }`}
          >
            Greater SD
          </button>
        </div>

        {/* Map and Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="h-[600px]">
                <Map 
                  events={filteredEvents} 
                  selectedType={selectedType}
                  onEventClick={setSelectedEvent}
                />
              </div>
            </div>
          </div>

          {/* Event List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Found
            </h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-gray-800">{selectedEvent.name}</h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {selectedEvent.type}
                  </span>
                </div>
                <p className="text-gray-600 text-lg">{selectedEvent.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{selectedEvent.location.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold">{new Date(selectedEvent.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Points</p>
                    <p className="font-semibold text-green-600">{selectedEvent.points} pts</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{selectedEvent.hours} hours</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button className="btn-primary flex-1">
                    Register for Event
                  </button>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="btn-secondary flex-1"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

