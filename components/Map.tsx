import { Map as PigeonMap, Marker } from "pigeon-maps";

type MapProps = {
  coordinates: [number, number];
};

function mapTilerProvider(x: number, y: number, z: number): string {
  return `https://basemaps.cartocdn.com/rastertiles/light_nolabels/${z}/${x}/${y}.png`;
}

const Map = ({ coordinates }: MapProps) => (
  <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
    <PigeonMap
      provider={mapTilerProvider}
      defaultCenter={coordinates}
      defaultZoom={6}
      attribution={
        <>
          Map tiles by <a href="https://carto.com/">Carto</a>, Data by{" "}
          <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>.
        </>
      }
    >
      <Marker anchor={coordinates} width={40} color={"#ffe100"} hover={false} />
    </PigeonMap>
  </div>
);

export default Map;
