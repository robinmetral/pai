import { Map as PigeonMap, Marker } from "pigeon-maps";

type MapProps = {
  coordinates: [number, number];
  prefersDarkMode: boolean;
};

function darkMapTileProvider(x: number, y: number, z: number): string {
  return `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/${z}/${x}/${y}.png`;
}

function lightMapTileProvider(x: number, y: number, z: number): string {
  return `https://tiles.stadiamaps.com/tiles/alidade_smooth/${z}/${x}/${y}.png`;
}

const Map = ({ coordinates, prefersDarkMode }: MapProps) => (
  <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
    <PigeonMap
      provider={prefersDarkMode ? darkMapTileProvider : lightMapTileProvider}
      defaultCenter={coordinates}
      defaultZoom={6}
      attribution={
        <>
          Map tiles by <a href="https://stadiamaps.com/">Stadia Maps</a>, data
          by <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>.
        </>
      }
    >
      <Marker anchor={coordinates} width={40} color={"#ffe100"} hover={false} />
    </PigeonMap>
  </div>
);

export default Map;
