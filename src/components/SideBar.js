import React from "react";
import logo from "img/logo.svg";
import Menu from "./Sidebar/Menu";

function SideBar() {
  return (
    <aside className="w-60 py-6 flex flex-col">
      <a href="/#" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu />
    </aside>
  );
}

export default SideBar;
