import "./Maps.css";
import { GoogleMap, InfoWindow } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { formatRelative } from "date-fns";
import { useRef } from "react";
import MapMarker from "./MapMarker";

const Map = ({ setLat, setLong, profileMarker, pawsArray }) => {
  const [marker, setMarker] = useState(null);
  const [selected, setSelected] = useState(null);

  const markersArray =
    pawsArray &&
    pawsArray.length &&
    pawsArray.map((paw) => (
      <MapMarker
        key={paw._id}
        setSelected={setSelected}
        marker={{
          lat: paw.lat,
          lng: paw.long,
          time: new Date(paw.date),
        }}
      />
    ));
  const onMapClick = useCallback(
    (e) => {
      setMarker(() => ({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      }));
      if (setLat && setLong) {
        setLat(e.latLng.lat());
        setLong(e.latLng.lng());
      }
    },
    [setLat, setLong]
  );

  const mapContainerStyle = {
    width: "25em",
    height: "25em",
  };

  const center = {
    lat: 53.349804,
    lng: -6.26031,
  };
  // const options = {
  //   disableDefaultUI: true,
  //   zoomControl: true,
  // };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const Locate = ({ panTo }) => {
    return (
      <button
        className="compass-button"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        <img src="hjfg" alt="compass - locate me" />
      </button>
    );
  };
  return (
    <div>
      {/* <h1 className="logo-map-title">
        Lost Paws{" "}
        <span role="img" aria-label="paws">
          🐾
        </span>{" "}
      </h1> */}
      <Locate panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markersArray}
        {!pawsArray && !profileMarker && marker ? (
          <MapMarker marker={marker} setSelected={setSelected} />
        ) : null}

        {profileMarker ? (
          <MapMarker marker={profileMarker} setSelected={setSelected} />
        ) : null}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Lost Paws!</h2>
              <p style={{ color: "blue" }}>
                Time: {formatRelative(selected.time, new Date())}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;
