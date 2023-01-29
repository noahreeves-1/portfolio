import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "./data/countries.json";
import { Feature, FeatureCollection } from "geojson";
import { Layer, StyleFunction } from "leaflet";

export const LeafletMap = () => {
  const addCountryColor = (countryName: string): string => {
    return countryName === "South Korea"
      ? "#0077b4"
      : countryName === "Japan"
      ? "#0077b4"
      : countryName === "China"
      ? "#0077b4"
      : countryName === "Indonesia"
      ? "#0077b4"
      : countryName === "United States of America"
      ? "#0077b4"
      : countryName === "Canada"
      ? "#0077b4"
      : countryName === "Mexico"
      ? "#0077b4"
      : countryName === "United Kingdom"
      ? "#0077b4"
      : countryName === "France"
      ? "#0077b4"
      : countryName === "Italy"
      ? "#0077b4"
      : countryName === "Netherlands"
      ? "#0077b4"
      : countryName === "Czech Republic"
      ? "#0077b4"
      : countryName === "Cambodia"
      ? "#0077b4"
      : countryName === "Thailand"
      ? "#0077b4"
      : countryName === "Laos"
      ? "#0077b4"
      : countryName === "Malaysia"
      ? "#0077b4"
      : countryName === "Vietnam"
      ? "#0077b4"
      : countryName === "Philippines"
      ? "#0077b4"
      : "#F9F9F9";
  };

  const countryStyle: StyleFunction = (feature?: Feature) => {
    return {
      color: "#d9d9d9",
      weight: 0.5,
      fillColor: addCountryColor(feature?.properties?.ADMIN),
      fillOpacity: 1,
    };
  };

  const mapStyle = {
    background: "transparent",
  };

  const countryNamePopup = (country: Feature, layer: Layer) => {
    const countryName = country?.properties?.ADMIN;
    layer.bindPopup(countryName);
  };

  const countries = mapData as FeatureCollection;

  const feature = countries.features.map((feature) => {
    return feature;
  });

  return (
    <section className="pt-10 pb-20 bg-white sm:pt-20 sm:pb-36">
      <h2 className="pb-8 text-lg text-center text-zinc-400 sm:pb-16 sm:text-3xl">
        Spotted in
      </h2>
      <div id="map" className="map flex justify-center">
        <MapContainer
          className="leaflet-container"
          center={[40.505, -0.09]}
          zoom={2}
          minZoom={1}
          scrollWheelZoom={true}
          maxBounds={[
            [180, -180],
            [-180, 180],
          ]}
          style={mapStyle}
        >
          {feature && (
            <GeoJSON
              data={mapData as FeatureCollection}
              style={countryStyle}
              onEachFeature={countryNamePopup}
            />
          )}
        </MapContainer>
      </div>
    </section>
  );
};
