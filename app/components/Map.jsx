// MapComponent.js
"use client";
import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ name }) => {
  const defaultPosition = [33.46587121670255, -112.09997405294479];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={12}
      style={{ height: "400px", width: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add markers for each farm */}

      <Marker position={defaultPosition}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
