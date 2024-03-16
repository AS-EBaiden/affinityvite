import { Link, Routes, Route } from "react-router-dom";

import { AffinityProvider, GlobalStyle } from "@allied-solutions/affinity";
import React from "react";

import theme from "./theme";
import ContainerSection from "./ContainerSection";
import Sample from "./pages/Sample";
import Heart from "./pages/Heart";

const App = () => {
  let startingEndpoint = "/affinityvite/";
  return (
    <AffinityProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route
          path={`/*`}
          element={<ContainerSection startingEndpoint={startingEndpoint} />}
        />
        <Route path={`dashboard`} element={<Sample />} />
        <Route path={`heart`} element={<Heart />} />
      </Routes>
    </AffinityProvider>
  );
};

export default App;
