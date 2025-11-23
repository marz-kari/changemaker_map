import Gallery from '../components/Gallery';
import { mockGalleryImages } from '../data/mockData';

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse photos from sustainability events across San Diego. Click on any collection to see more photos from that event.
          </p>
        </div>
        <Gallery images={mockGalleryImages} />
      </div>
    </div>
  );
}

