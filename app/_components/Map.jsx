import React from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";

const customMarkerIcon = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(<FaMapMarkerAlt size={25} color="red" />),
  iconSize: [25, 25],
  iconAnchor: [12.5, 12.5],
});

const MapComponent = ({ name, position, zoom }) => {
  const defaultPosition = position || [33.46587121670255, -112.09997405294479];
  const defaultZoom = zoom || 12;

  return (
    <MapContainer
      center={defaultPosition}
      zoom={defaultZoom}
      style={{ height: "400px", width: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={defaultPosition} icon={customMarkerIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
