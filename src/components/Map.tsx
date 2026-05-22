import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { motion } from 'motion/react';
import 'leaflet/dist/leaflet.css';

const mapViews = {
  all: {
    center: [28, -80],
    zoom: 3,
    places: [
      { name: 'NYC', lat: 40.71, lng: -74.01, color: '#C8604A' },
      { name: 'LA', lat: 34.05, lng: -118.24, color: '#C8604A' },
      { name: 'SF', lat: 37.77, lng: -122.42, color: '#C8604A' },
      { name: 'JT', lat: 34.13, lng: -116.31, color: '#D4913A' },
      { name: 'PS', lat: 33.83, lng: -116.54, color: '#D4913A' },
      { name: 'Nash', lat: 36.17, lng: -86.78, color: '#6B8F71' },
      { name: 'SJU', lat: 18.47, lng: -66.12, color: '#C8604A' },
      { name: 'VI', lat: 18.33, lng: -64.73, color: '#D4913A' }
    ],
    chips: [
      { name: 'New York City', lat: 40.71, lng: -74.01, color: '#C8604A' },
      { name: 'Los Angeles', lat: 34.05, lng: -118.24, color: '#C8604A' },
      { name: 'San Francisco', lat: 37.77, lng: -122.42, color: '#C8604A' },
      { name: 'Joshua Tree', lat: 34.13, lng: -116.31, color: '#D4913A' },
      { name: 'Palm Springs', lat: 33.83, lng: -116.54, color: '#D4913A' },
      { name: 'Nashville', lat: 36.17, lng: -86.78, color: '#6B8F71' },
      { name: 'Puerto Rico', lat: 18.47, lng: -66.12, color: '#C8604A' },
      { name: 'Virgin Islands', lat: 18.33, lng: -64.73, color: '#D4913A' }
    ]
  },
  us: {
    center: [39.5, -98.5],
    zoom: 4,
    places: [
      { name: 'NYC', lat: 40.71, lng: -74.01, color: '#C8604A' },
      { name: 'LA', lat: 34.05, lng: -118.24, color: '#C8604A' },
      { name: 'SF', lat: 37.77, lng: -122.42, color: '#C8604A' },
      { name: 'JT', lat: 34.13, lng: -116.31, color: '#D4913A' },
      { name: 'PS', lat: 33.83, lng: -116.54, color: '#D4913A' },
      { name: 'Nash', lat: 36.17, lng: -86.78, color: '#6B8F71' },
      { name: 'Lake Tahoe', lat: 39.09, lng: -120.03, color: '#7A4E6E' }
    ],
    chips: [
      { name: 'New York City', lat: 40.71, lng: -74.01, color: '#C8604A' },
      { name: 'Los Angeles', lat: 34.05, lng: -118.24, color: '#C8604A' },
      { name: 'San Francisco', lat: 37.77, lng: -122.42, color: '#C8604A' },
      { name: 'Joshua Tree', lat: 34.13, lng: -116.31, color: '#D4913A' },
      { name: 'Palm Springs', lat: 33.83, lng: -116.54, color: '#D4913A' },
      { name: 'Nashville', lat: 36.17, lng: -86.78, color: '#6B8F71' },
      { name: 'Lake Tahoe, CA', lat: 39.09, lng: -120.03, color: '#7A4E6E' }
    ]
  },
  caribbean: {
    center: [18.2, -66.0],
    zoom: 8,
    places: [
      { name: 'SJU', lat: 18.47, lng: -66.12, color: '#C8604A' },
      { name: 'Yunque', lat: 18.32, lng: -65.78, color: '#6B8F71' },
      { name: 'St. John', lat: 18.33, lng: -64.73, color: '#D4913A' },
      { name: 'Virgin Gorda', lat: 18.50, lng: -64.43, color: '#7A4E6E' }
    ],
    chips: [
      { name: 'Puerto Rico', lat: 18.47, lng: -66.12, color: '#C8604A' },
      { name: 'El Yunque Rainforest', lat: 18.32, lng: -65.78, color: '#6B8F71' },
      { name: 'St. John, USVI', lat: 18.33, lng: -64.73, color: '#D4913A' },
      { name: 'Virgin Gorda, BVI', lat: 18.50, lng: -64.43, color: '#7A4E6E' }
    ]
  }
};

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [activeTab, setActiveTab] = useState<keyof typeof mapViews>('all');

  const handleZoomTo = (lat: number, lng: number) => {
    if (leafletMapRef.current) {
      leafletMapRef.current.setView([lat, lng], 10, { animate: true });
    }
  };

  useEffect(() => {
    if (!mapRef.current) return;

    if (!leafletMapRef.current) {
      leafletMapRef.current = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(leafletMapRef.current);
    }

    const view = mapViews[activeTab];
    leafletMapRef.current.setView(view.center as L.LatLngExpression, view.zoom);

    // Clear old markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    // Add new markers
    view.places.forEach(place => {
      const icon = L.divIcon({
        className: 'custom-pin',
        html: `<div class="pin-dot" style="background:${place.color}"></div><div class="pin-label">${place.name}</div>`,
        iconSize: [80, 30],
        iconAnchor: [14, 18]
      });

      const marker = L.marker([place.lat, place.lng] as L.LatLngExpression, { icon })
        .addTo(leafletMapRef.current!)
        .on('click', () => handleZoomTo(place.lat, place.lng));
      
      markersRef.current.push(marker);
    });

    const timer = setTimeout(() => {
      leafletMapRef.current?.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-warm-white py-20 px-4 md:px-8 w-full" id="places">
      <div className="max-w-[600px] lg:max-w-none mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {(Object.keys(mapViews) as Array<keyof typeof mapViews>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-xs font-bold tracking-wider px-5 py-2 rounded-full border transition-all uppercase ${
                activeTab === key
                  ? 'bg-terracotta border-terracotta text-white'
                  : 'bg-transparent border-sand text-ink-soft hover:border-terracotta hover:text-terracotta'
              }`}
            >
              {key === 'all' ? 'All Destinations' : key === 'us' ? 'United States' : 'Caribbean'}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          ref={mapRef}
          className="w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-sand bg-[#f7f3eb] z-0"
        />
      </div>
    </div>
  );
}
