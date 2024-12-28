import React from "react";
import LeftNavBar from "./navLeftContainer/Index";
import RightNavBar from "./navRightContainer/Index";
export default function Index() {
  return (
    <div>
      <nav className="nav_bar">
        <LeftNavBar/>
        <RightNavBar/>
      </nav>
    </div>
  );
}
