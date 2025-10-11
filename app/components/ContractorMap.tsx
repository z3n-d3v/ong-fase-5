import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

const IconMarker = new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]});

export const ContractorMap = () => {
  return (
    <MapContainer center={[-14.9068, -43.1729]} zoom={5} scrollWheelZoom={false} className="h-[calc(100vh_-_280px)] z-30">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-22.9068, -43.1729]} icon={IconMarker}>
        <Popup>
          Distribuidor
        </Popup>
      </Marker>

      <Marker position={[-14.9068, -47.1729]} icon={IconMarker}>
        <Popup>
          Distribuidor
        </Popup>
      </Marker>

      <Marker  position={[-15.9068, -40.1729]} icon={IconMarker}>
        <Popup>
          Fornecimento - Café
        </Popup>
      </Marker>

      <Marker position={[-17.9068, -50.1729]} icon={IconMarker}>
        <Popup>
          Fornecimento - Café
        </Popup>
      </Marker>

      <Marker position={[-13.9068, -43.1729]} icon={IconMarker}>
        <Popup>
          Fornecimento - Cevada
        </Popup>
      </Marker>

      <Marker position={[-15.9068, -50.1729]} icon={IconMarker}>
        <Popup>
          Fornecimento - Milho
        </Popup>
      </Marker>

      <Marker position={[-16.9068, -50.1729]} icon={IconMarker}>
        <Popup>
          Fornecimento - Café
        </Popup>
      </Marker>

      <Marker position={[-18.9068, -51.1729]} icon={IconMarker}>
        <Popup>
          Fornecimento - Milho
        </Popup>
      </Marker>
    </MapContainer>
  );
}

