import Head from "next/head";
import polylabel from "polylabel";
import germany from "../data/germany.geo.json";
import Map from "../components/Map";

const germanyPIA = polylabel(germany.features[0].geometry.coordinates, 1.0);
const coordinates: [number, number] = [germanyPIA[1], germanyPIA[0]];

type PageProps = {
  prefersDarkMode: boolean;
};

const Germany = ({ prefersDarkMode }: PageProps) => (
  <>
    <Head>
      <title>Pole of Inaccessibility: Germany</title>
    </Head>
    <Map coordinates={coordinates} prefersDarkMode={prefersDarkMode} />
  </>
);

export default Germany;
