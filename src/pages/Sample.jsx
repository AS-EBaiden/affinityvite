import { InputGroup, Box } from "@allied-solutions/affinity";
import React from "react";

const Sample = () => {
  const [value, setValue] = React.useState(5);
  return (
    <div
      style={{
        background: "white",
        marginTop: "100px",
        marginLeft: "100px",
      }}
    >
      <Box maxWidth="400px">
        <h2>this is a dashboard but a fake one</h2>
      </Box>
    </div>
  );
};

export default Sample;
