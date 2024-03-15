import React from "react";

export default function Header() {
  const [search, setSearch] = React.useState("");
  return (
    <header
      style={{
        width: "100%",
        background: "white",
        height: "8rem",
        top: "0",
        textAlign: "center",
        zIndex: 999,
        marginBottom: "2rem",
        position: "fixed",
      }}
    >
      <div>hello world</div>
    </header>
  );
}
