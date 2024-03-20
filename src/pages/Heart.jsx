import {
  Box,
  Tile,
  ButtonGroup,
  ButtonDiv,
  Button,
  H2,
  P,
  Main,
  Collapse,
} from "@allied-solutions/affinity";
import * as affinity from "@allied-solutions/affinity";
import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import MainView from "./MainView";
import Dashboard from "./Dashboard/Dashboard";
import Canvas from "./Canvas";
console.log("affinity", affinity);
const Heart = () => {
  const [activeBar, setActiveBar] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  return (
    <>
      {/* <Header
        activeBar={activeBar}
        className={activeBar ? "header-content" : "header-content with-sidebar"}
      /> */}
      <Navigation activeBar={activeBar} setActiveBar={setActiveBar} />

      <Main
        className={activeBar ? "main-content" : "main-content with-sidebar"}
      >
        <Canvas />
        {/* <MainView /> */}
        {/* <Dashboard /> */}
      </Main>
    </>
  );
};

export default Heart;
