import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Event } from '../data/mockData';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapProps {
  events: Event[];
  selectedType?: 'USD' | 'UM' | 'Greater SD' | 'All';
  onEventClick?: (event: Event) => void;
}

export default function Map({ events, selectedType = 'All', onEventClick }: MapProps) {
  const [filteredEvents, setFilteredEvents] = useState(events);

  useEffect(() => {
    if (selectedType === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.type === selectedType));
    }
  }, [events, selectedType]);

  // San Diego center coordinates
  const center: [number, number] = [32.7157, -117.1611];
  const zoom = 12;

  // Create custom green icon for markers
  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredEvents.map((event) => (
          <Marker
            key={event.id}
            position={[event.location.lat, event.location.lng]}
            icon={greenIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-green-700 mb-1">{event.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>📍 {event.location.address}</p>
                  <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                  <p>⭐ {event.points} points • ⏱️ {event.hours} hours</p>
                </div>
                {onEventClick && (
                  <button
                    onClick={() => onEventClick(event)}
                    className="mt-2 px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition-colors"
                  >
                    View Details
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

