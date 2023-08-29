import React from "react";
import { Icon } from "icons/Icons";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href="/#"
            className="h-10 gap-x-4 flex items-center text-sm font-semibold text-white hover:text-white rounded transition-colors px-4 bg-active"
          >
            <span>
              <Icon name="home" size={24} />
            </span>
            Ana sayfa
          </a>
        </li>
        <li>
          <a
            href="/#"
            className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white rounded transition-colors px-4 "
          >
            <span>
              <Icon name="search" size={24} />
            </span>
            Ara
          </a>
        </li>
        <li>
          <a
            href="/#"
            className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white rounded transition-colors px-4 "
          >
            <span>
              <Icon name="collection" size={24} />
            </span>
            Kitaplığın
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
