import { useState } from 'react';
import { GalleryImage } from '../data/mockData';

interface GalleryProps {
  images: GalleryImage[];
  onImageClick?: (image: GalleryImage) => void;
}

export default function Gallery({ images, onImageClick }: GalleryProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  // Group images by event
  const eventGroups = images.reduce((acc, image) => {
    if (!acc[image.eventId]) {
      acc[image.eventId] = {
        eventId: image.eventId,
        eventName: image.eventName,
        images: []
      };
    }
    acc[image.eventId].images.push(image);
    return acc;
  }, {} as Record<string, { eventId: string; eventName: string; images: GalleryImage[] }>);

  const eventGroupsArray = Object.values(eventGroups);

  if (selectedEvent) {
    const group = eventGroupsArray.find(g => g.eventId === selectedEvent);
    if (!group) return null;

    return (
      <div className="space-y-4">
        <button
          onClick={() => setSelectedEvent(null)}
          className="flex items-center space-x-2 text-usd-teal hover:text-teal-700 font-medium"
        >
          <span>←</span>
          <span>Back to Gallery</span>
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{group.eventName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.images.map((image) => (
              <div
                key={image.id}
                onClick={() => onImageClick?.(image)}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md card-hover"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-medium">{image.caption}</p>
                    <p className="text-sm text-gray-200">{new Date(image.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eventGroupsArray.map((group) => (
        <div
          key={group.eventId}
          onClick={() => setSelectedEvent(group.eventId)}
          className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg card-hover"
        >
          <img
            src={group.images[0]?.url || 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800'}
            alt={group.eventName}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{group.eventName}</h3>
              <p className="text-sm text-gray-200">
                {group.images.length} {group.images.length === 1 ? 'photo' : 'photos'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

