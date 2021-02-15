import Head from "next/head";
import polylabel from "polylabel";
import berlin from "../data/berlin.geo.json";
import Map from "../components/Map";

const berlinPIA = polylabel(berlin.features[0].geometry.coordinates, 1.0);
const coordinates: [number, number] = [berlinPIA[1], berlinPIA[0]];

type PageProps = {
  prefersDarkMode: boolean;
};

const Berlin = ({ prefersDarkMode }: PageProps) => (
  <>
    <Head>
      <title>Pole of Inaccessibility: Berlin</title>
    </Head>
    <Map coordinates={coordinates} prefersDarkMode={prefersDarkMode} />
  </>
);

export default Berlin;
