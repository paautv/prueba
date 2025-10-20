import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface ProjectMapProps {
  latitude: number;
  longitude: number;
  name: string;
}

const ProjectMap: React.FC<ProjectMapProps> = ({ latitude, longitude, name }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: 300, width: '100%', marginBottom: 20 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ProjectMap;
