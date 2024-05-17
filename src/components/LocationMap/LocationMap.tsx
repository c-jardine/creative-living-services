import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function LocationMap() {
  const API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY as string;
  const coordinates = { lat: 41.709452587291715, lng: -83.47926357501652 };

  return (
    <APIProvider apiKey={API_KEY}>
      <Map defaultCenter={coordinates} defaultZoom={15}>
        <Marker position={coordinates} />
      </Map>
    </APIProvider>
  );
}
