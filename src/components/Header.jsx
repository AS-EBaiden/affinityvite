import React from "react";

export default function Header({ activeBar }) {
  return (
    <div
      className={activeBar ? "header-content" : "header-content with-sidebar"}
      style={{
        width: "100%",
        background: "burlywood",
        height: "8rem",
        // top: "0",
        zIndex: 999,
        // marginBottom: "2rem",
        position: "fixed",
        // position: "relative",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "left" }}>hello world</div>
    </div>
  );
}
