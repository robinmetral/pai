import { useEffect } from "react";
import router from "next/router";

const Index = () => {
  useEffect(() => {
    router.push("/germany");
  }, []);
  return null;
};

export default Index;
