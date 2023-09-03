import { Icon } from "icons/Icons";
import React from "react";

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black w-12 h-10 flex items-center justify-center absolute top-o left-0"
      >
        <Icon size={24} name="search" />
      </label>
      <input
        autoFocus={true}
        type="text"
        id="search-input"
        className="h-10 bg-white rounded-3xl pl-12 outline-none text-black font-medium text-sm placeholder-black/50 max-w-full w-[22.75rem]"
        placeholder="Sanatçılar, şarkılar veya podcast'ler"
      />
    </div>
  );
}

export default Search;
