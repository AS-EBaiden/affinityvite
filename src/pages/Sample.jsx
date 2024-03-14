import { InputGroup, Box } from "@allied-solutions/affinity";
import React from "react";
import { Check } from "@allied-solutions/affinity-react-icons/dist/16px";
import Navigation from "../components/Navigation";
import "../components/Navigation/styles/index.css";

const Sample = () => {
  const [value, setValue] = React.useState(5);
  return (
    <div className="app">
      <Navigation />
      <main>
        <Box>
          <h2>this is a dashboard but a fake one</h2>
          <h3>
            If you're seeing this, it successfully auto published after i pushed
            to main
          </h3>
        </Box>
        <div>Hello there</div>
      </main>
    </div>
  );
};

export default Sample;
