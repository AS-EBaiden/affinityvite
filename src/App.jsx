import { AffinityProvider, GlobalStyle } from "@allied-solutions/affinity";
import { Routes, Route } from "react-router-dom";

import React from "react";

import theme from "./theme";
import ContainerSection from "./ContainerSection";
import Sample from "./pages/Sample";

const App = () => {
  return (
    <AffinityProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path="/*" element={<ContainerSection />} />
        <Route path="/dashboard" element={<Sample />} />
      </Routes>
    </AffinityProvider>
  );
};

export default App;
