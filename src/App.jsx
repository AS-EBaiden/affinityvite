import { Link, Routes, Route } from "react-router-dom";

import { AffinityProvider, GlobalStyle } from "@allied-solutions/affinity";
import React from "react";

import theme from "./theme";
import ContainerSection from "./ContainerSection";
import Sample from "./pages/Sample";

// const App = () => {
//   let startingEndpoint = "/affinityvite/";
//   return (
//     <AffinityProvider theme={theme}>
//       <GlobalStyle />

//       <Routes>
//         <Route
//           path={`${startingEndpoint}*`}
//           element={<ContainerSection startingEndpoint={startingEndpoint} />}
//         />
//         <Route path={`${startingEndpoint}dashboard`} element={<Sample />} />
//       </Routes>
//     </AffinityProvider>
//   );
// };

// export default App;

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
        {/* <Route path={`emailsent`} element={<>email sent</>} /> */}
      </Routes>
    </AffinityProvider>
  );
};

export default App;
