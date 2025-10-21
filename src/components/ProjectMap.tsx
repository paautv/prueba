import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";

interface ProjectMapProps {
  longitude: number;
  latitude: number;
  name: string;
}

const ProjectMap: React.FC<ProjectMapProps> = ({ longitude, latitude, name }) => {
  const iconHtml = ReactDOMServer.renderToString(
    <LocationOnIcon style={{ fontSize: 40 }} />
  );

  const customIcon = L.divIcon({
    html: iconHtml,
    className: "custom-icon",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <MapContainer center={[longitude, latitude]} zoom={13} style={{ height: 400, width: '100%', marginBottom: 20 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[longitude, latitude]} icon={customIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ProjectMap;
