import React from "react";
import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import { useRouteMatch } from "react-router-dom";
import Search from "./Navbar/Search";

function NavBar() {
  const searchRoute = useRouteMatch("/search");

  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchRoute && <Search />}
      <Auth />
    </div>
  );
}

export default NavBar;
