import React from "react";
import { NavLink } from "react-router-dom";

function Title({ title, more = false }) {
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more ?? "#"}>
          <h3 className="text-2xl font-semibold text-white tracking-tight hover:underline">
            {title}
          </h3>
        </NavLink>
        {more && (
          <NavLink
            className={
              "text-xs font-semibold upparcase text-link hover:underline tracking-wider"
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
    </div>
  );
}

export default Title;
