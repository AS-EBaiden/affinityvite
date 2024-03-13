import React from "react";
import { NavAnchor } from "./NavAnchor";
import { styled } from "./styled";
// import { SubnavCollapse } from "./SubnavCollapse";

export function SubnavCollapse() {
  return (
    <div>
      <h2>SubnavCollapse Subbie</h2>
      <div>
        <NavAnchor />
        {styled()}
      </div>
    </div>
  );
}
