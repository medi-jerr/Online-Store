import React, { useEffect, useRef, useState } from "react";
import About from "./about";
import Setting from "./setting";
import Landing from "./landing";
import colorSelector from "../redux/selecotors/colorSelector";
import { useSelector } from "react-redux";
import Skill from "./skill";
import ScrollUp from "./buttons/ScrollUp";
import Navbar from "./navbar";
import Gallery from "./gallery";
import TimeLine from "./timeLine";

function Home() {
  const { colour } = useSelector(colorSelector);

  return (
    <>
      <Navbar colour={colour} />
      <Landing colour={colour} />
      <Setting />
      <About colour={colour} />
      <Skill colour={colour} />
      <ScrollUp colour={colour} />
      <Gallery colour={colour} />
      <TimeLine colour={colour} />
    </>
  );
}

export default Home;
