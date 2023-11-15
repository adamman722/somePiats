import React from "react";
import { useSelector } from "react-redux";

function LandingPage() {
  const data = useSelector((state) => state.pokeData);
  return <div>{data}</div>;
}

export default LandingPage;
