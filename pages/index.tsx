import {
  useState,
  // useEffect
} from "react";
import Head from "next/head";
import polylabel from "polylabel";
import { Map, Marker } from "pigeon-maps";

import germanyJSON from "../data/germany.geo.json";
import berlinJSON from "../data/berlin.geo.json";

const germanyPIA = polylabel(germanyJSON.features[0].geometry.coordinates, 1.0);
const berlinPIA = polylabel(berlinJSON.features[0].geometry.coordinates, 1.0);

type View = "berlin" | "germany";

type MapState = {
  view: View;
  center: [number, number];
  zoom: number;
};

const MAP_VIEWS: {
  [key in View]: MapState;
} = {
  germany: {
    view: "germany",
    center: [germanyPIA[1], germanyPIA[0]],
    zoom: 6,
  },
  berlin: {
    view: "berlin",
    center: [berlinPIA[1], berlinPIA[0]],
    zoom: 10,
  },
};

const Index = () => {
  /**
   * Dark mode
   */
  // const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(false);
  // useEffect(() => {
  //   if (window.matchMedia) {
  //     return setPrefersDarkMode(
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //     );
  //   }
  // }, []);

  /**
   * Map logic
   */
  function mapTileProvider(
    x: number,
    y: number,
    z: number
    // dpr?: number
  ): string {
    const s = String.fromCharCode(97 + ((x + y + z) % 3));
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
    // return `https://tiles.stadiamaps.com/tiles/alidade_smooth${
    //   prefersDarkMode ? "_dark" : ""
    // }/${z}/${x}/${y}${dpr && dpr >= 2 ? "@2x" : ""}.png`;
  }

  const [mapState, setMapState] = useState<MapState>(MAP_VIEWS.germany);
  const accentColor = "#ffe100";

  return (
    <>
      <Head>
        <title>Pole of inaccessibility (PIA)</title>
      </Head>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <style jsx global>{`
          body {
            margin: 0;
          }
          button {
            font-family: inherit;
            font-size: 100%;
            margin: 0;
            border: 1px solid transparent;
            background: none;
            border-radius: 5px;
          }
          button:hover,
          button:active {
            background: ${accentColor};
          }
          button:focus {
            outline: none;
            border: 1px solid black;
          }
        `}</style>
        <Map
          provider={mapTileProvider}
          center={mapState.center}
          zoom={mapState.zoom}
          minZoom={3}
          maxZoom={15}
          onBoundsChanged={({ center, zoom }) =>
            setMapState({ ...mapState, center, zoom })
          }
          attributionPrefix={
            <>
              <button onClick={() => setMapState(MAP_VIEWS.germany)}>
                Germany PIA
              </button>{" "}
              &middot;{" "}
              <button onClick={() => setMapState(MAP_VIEWS.berlin)}>
                Berlin PIA
              </button>
            </>
          }
          attribution={
            <>
              &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy;{" "}
              <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy;{" "}
              <a href="http://openstreetmap.org">OpenStreetMap</a> contributors
            </>
          }
        >
          <Marker
            anchor={MAP_VIEWS[mapState.view].center}
            width={40}
            color={accentColor}
            hover={false}
          />
        </Map>
      </div>
    </>
  );
};

export default Index;
