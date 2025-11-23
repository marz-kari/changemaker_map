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
  selectedDays?: number;
  selectedLocation?: string;
}

export default function Map({ events, selectedType = 'All', onEventClick, selectedDays, selectedLocation }: MapProps) {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    let filtered = events;

    // Filter by type
    if (selectedType !== 'All') {
      filtered = filtered.filter(event => event.type === selectedType);
    }

    // Filter by days
    if (selectedDays) {
      const today = new Date();
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + selectedDays);
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= futureDate;
      });
    }

    // Filter by location (San Diego subsets)
    if (selectedLocation && selectedLocation !== 'All') {
      filtered = filtered.filter(event => {
        const address = event.location.address.toLowerCase();
        if (selectedLocation === 'Downtown') {
          return address.includes('downtown') || address.includes('92101');
        } else if (selectedLocation === 'USD Campus') {
          return address.includes('usd') || address.includes('campus') || address.includes('92110');
        } else if (selectedLocation === 'North County') {
          return address.includes('92111') || address.includes('comstock');
        }
        return true;
      });
    }

    setFilteredEvents(filtered);
  }, [events, selectedType, selectedDays, selectedLocation]);

  // USD center coordinates
  const center: [number, number] = [32.7715, -117.1886];
  const zoom = 14;

  // Create custom green icon for markers
  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const handleMapClick = () => {
    setIsInteractive(true);
  };

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg relative">
      {!isInteractive && (
        <div
          onClick={handleMapClick}
          className="absolute inset-0 z-[1000] bg-black/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors"
        >
          <div className="bg-white/90 rounded-lg p-6 shadow-xl text-center max-w-md mx-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">Click to interact with the map</p>
            <p className="text-sm text-gray-600">Explore changemaking opportunities across San Diego</p>
          </div>
        </div>
      )}
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={isInteractive}
        dragging={isInteractive}
        touchZoom={isInteractive}
        doubleClickZoom={isInteractive}
        zoomControl={isInteractive}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {isInteractive && filteredEvents.map((event) => (
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
