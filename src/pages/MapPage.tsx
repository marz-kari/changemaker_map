import { useState } from 'react';
import Map from '../components/Map';
import MapFilters from '../components/MapFilters';
import EventCard from '../components/EventCard';
import { mockEvents, Event } from '../data/mockData';

export default function MapPage() {
  const [selectedType, setSelectedType] = useState<'USD' | 'UM' | 'Greater SD' | 'All'>('All');
  const [selectedDays, setSelectedDays] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Filter events based on all criteria
  const getFilteredEvents = () => {
    let filtered = mockEvents;

    if (selectedType !== 'All') {
      filtered = filtered.filter(event => event.type === selectedType);
    }

    if (selectedDays) {
      const today = new Date();
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + selectedDays);
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= futureDate;
      });
    }

    if (selectedLocation && selectedLocation !== 'All') {
      filtered = filtered.filter(event => {
        const address = event.location.address.toLowerCase();
        if (selectedLocation === 'Downtown') {
          return address.includes('downtown') || address.includes('92101');
        } else if (selectedLocation === 'USD Campus') {
          return address.includes('usd') || address.includes('campus') || address.includes('ministry');
        } else if (selectedLocation === 'North County') {
          return address.includes('92111') || address.includes('comstock');
        }
        return true;
      });
    }

    return filtered;
  };

  const filteredEvents = getFilteredEvents();

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Map</h1>
          <p className="text-xl text-gray-600">
            Explore changemaking opportunities across San Diego
          </p>
        </div>

        {/* Map and Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Map */}
          <div className="lg:col-span-2 relative">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="h-[600px] relative">
                <Map 
                  events={filteredEvents} 
                  selectedType={selectedType}
                  selectedDays={selectedDays}
                  selectedLocation={selectedLocation}
                  onEventClick={setSelectedEvent}
                />
                <MapFilters
                  onTypeChange={setSelectedType}
                  onDaysChange={setSelectedDays}
                  onLocationChange={setSelectedLocation}
                  selectedType={selectedType}
                  selectedDays={selectedDays}
                  selectedLocation={selectedLocation}
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
                {selectedEvent.registrationUrl && (
                  <div>
                    <a
                      href={selectedEvent.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      Register for Event
                    </a>
                  </div>
                )}
                <div className="flex gap-4 pt-4">
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
