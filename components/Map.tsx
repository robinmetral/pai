import { Map as PigeonMap, Marker } from "pigeon-maps";

type MapProps = {
  coordinates: [number, number];
};

function mapTilerProvider(x: number, y: number, z: number): string {
  return `http://tile.stamen.com/toner-lite/${z}/${x}/${y}.png`;
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
          Map tiles by <a href="http://stamen.com">Stamen Design</a>, under{" "}
          <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>.
          Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under{" "}
          <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
        </>
      }
    >
      <Marker anchor={coordinates} width={40} color={"#ffe100"} hover={false} />
    </PigeonMap>
  </div>
);

export default Map;
