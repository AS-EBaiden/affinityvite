import { AffinityProvider, GlobalStyle } from "@allied-solutions/affinity";
import { Routes, Route } from "react-router-dom";

import React from "react";

import theme from "./theme";
import ContainerSection from "./ContainerSection";
import Sample from "./pages/Sample";

const App = () => {
  let startingEndpoint = "/affinityvite/";
  return (
    <AffinityProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route
          path={`${startingEndpoint}*`}
          element={<ContainerSection startingEndpoint={startingEndpoint} />}
        />
        <Route path={`${startingEndpoint}dashboard`} element={<Sample />} />
      </Routes>
    </AffinityProvider>
  );
};

export default App;
