import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="left">
          <a href="#about">Israel Reveles</a>
        </div>
        <div className="right">
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#message">Leave a message</a>
        </div>
      </nav>
    </>
  );
}
