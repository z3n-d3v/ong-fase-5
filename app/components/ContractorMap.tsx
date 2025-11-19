import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';

import { userData } from "../data/users.json";
import { useEffect, useState } from 'react';
const IconMarker = new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] });

export const ContractorMap = () => {
  const [stakeholders, setStakeholders] = useState();

  const writeRecords = () => {
    const records = localStorage.getItem('stakeholders');
    if (records) {
      return;
    } else {
      localStorage.setItem('stakeholders', JSON.stringify(userData))
    }
  }

  const fetchRecords = () => {
    const records = localStorage.getItem('stakeholders');
    setStakeholders(JSON.parse(records));
  }

  useEffect(() => {
    writeRecords();
    fetchRecords();
  }, [])

  return (
    <>
      <MapContainer center={[-14.9068, -43.1729]} zoom={4} scrollWheelZoom={false} className="h-[calc(100vh_-_280px)] z-30">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stakeholders && stakeholders?.length > 0 && (
          <>
            {stakeholders.map((stakeholder, index) => {
              const [latitude, longitude] = stakeholder.location.split(',');

              const categoryName = (str) => {
                return str.charAt(0).toUpperCase() + str.slice(1);
              }

              return (
                <Marker key={index} position={[Number(latitude), Number(longitude)]} icon={IconMarker}>
                  <Popup>
                    {categoryName(stakeholder.categoria)} - {stakeholder.culture}
                  </Popup>
                </Marker>
              )
            })}
          </>
        )}
      </MapContainer>
    </>
  );
}

