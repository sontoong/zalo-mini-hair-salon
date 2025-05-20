import { divIcon, LatLngTuple } from "leaflet";
import React, { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import LocationPinIcon from "../../static/location-pin-icon.png";
import MapLocateIcon from "../../static/map-locate-icon.png";
import { Button } from "./button";

export const Map: FC<{ lat: number; long: number }> = ({ lat, long }) => {
  const position = [lat, long] as LatLngTuple;

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="size-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={divIcon({
          html: renderToStaticMarkup(
            <img
              src={LocationPinIcon}
              className="-translate-x-1/2 -translate-y-1/2"
            />,
          ),
          iconSize: [0, 0],
        })}
        position={position}
      >
        <Popup>
          lat: {position[0]}, long: {position[1]}
        </Popup>
      </Marker>
      <RecenterButton position={position} />
    </MapContainer>
  );
};

const RecenterButton = ({ position }: { position: LatLngTuple }) => {
  const map = useMap();

  const handleRecenter = () => {
    map.setView(position, 13);
  };

  return (
    <Button.Icon
      icon={<img src={MapLocateIcon} />}
      onClick={handleRecenter}
      className="absolute bottom-[100px] right-[16px] z-[999] size-[36px] !rounded-[8px] border border-stroke1 bg-white"
      style={{ boxShadow: "0px 1px 12px 0px #00000033" }}
    />
  );
};
