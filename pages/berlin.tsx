import polylabel from "polylabel";
import berlin from "../data/berlin.geo.json";
import Map from "../components/Map";

const berlinPIA = polylabel(berlin.features[0].geometry.coordinates, 1.0);
const coordinates: [number, number] = [berlinPIA[1], berlinPIA[0]];

const Berlin = () => <Map coordinates={coordinates} />;

export default Berlin;
