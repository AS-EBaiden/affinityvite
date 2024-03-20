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
  Header,
  RecentSearch,
} from "@allied-solutions/affinity";
import * as affinity from "@allied-solutions/affinity";
import React from "react";
import Navigation from "../components/Navigation";
// import Header from "../components/Header";
import MainView from "./MainView";
import Dashboard from "./Dashboard/Dashboard";
import Canvas from "./Canvas";
console.log("affinity", affinity);
const Heart = () => {
  const [activeBar, setActiveBar] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef(null);
  const [search, setSearch] = React.useState("");

  return (
    <>
      {/* <Header
        activeBar={activeBar}
        className={activeBar ? "header-content" : "header-content with-sidebar"}
      /> */}
      <Header
        className={activeBar ? "header-content" : "header-content with-sidebar"}
        // width="100%"
        style={{
          zIndex: 99,
          color: "black",
          background: "white",
          // background: "cadetblue",
          right: 0,
          // textAlign: "center",
          fontSize: "xxx-large",
          padding: "3rem",
          position: "fixed",
        }}
      >
        <RecentSearch
          size="lg"
          // style={{ width: "93% !important" }}
          id="RecentSearch--basicUsage"
          placeholder="Start your search (e.g. Loan #, Borrower Address, etc…)"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          // Clears search input with 'Esc' key
          onClear={() => setSearch("")}
          hintText="You can put whatever you want here! But the 'Hint' stays!"
        />
      </Header>
      <Navigation activeBar={activeBar} setActiveBar={setActiveBar} />

      <Main
        style={{ padding: "2rem", paddingTop: "11rem", background: "#F5F7FB" }}
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
