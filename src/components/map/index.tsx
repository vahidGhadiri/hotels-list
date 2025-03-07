import { MapContainer, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import type { FC } from "react";

import { MarkerProps } from "./components/marker";
import { Marker } from "./components";
import "leaflet/dist/leaflet.css";

interface MapProps {
  center?: [number, number];
  markers: MarkerProps[];
}

const Map: FC<MapProps> = ({ markers, center }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.lang = "en";
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-60 rounded-xl">
        Loading map...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center rounded-s overflow-hidden shadow-lg">
      <MapContainer
        className="w-full h-[320px]"
        attributionControl={true}
        preferCanvas={true}
        zoomControl={false}
        center={center}
        zoom={14}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        {markers?.map(({ position, popup }, index) => (
          <Marker key={index} position={position} popup={popup} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
