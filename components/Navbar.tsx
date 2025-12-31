import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="absolute w-full h-22 px-36">
      <div className="w-full h-full flex flex-row justify-end items-center gap-6 ">
        <Button>Upload</Button>
        <Button>Export</Button>
      </div>
    </nav>
  );
}

export default Navbar;
