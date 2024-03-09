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
        <Route path="/affinityvite/*" element={<ContainerSection />} />
        <Route path="/affinityvite/dashboard" element={<Sample />} />
      </Routes>
    </AffinityProvider>
  );
};

export default App;
