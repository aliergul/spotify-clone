import { Icon } from "icons/Icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrent } from "stores/player";

function SongItem({ item }) {
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";

      case "album":
        return "rounded-lg";

      case "single":
        return "rounded";

      default:
    }
  };
  const dispatch = useDispatch();
  const { current, playing } = useSelector((state) => state.player);

  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };

  return (
    <NavLink
      key={item.id}
      to="/"
      className={"bg-footer p-4 rounded hover:bg-active group"}
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          alt=""
          className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
            item
          )}`}
        />
        <button
          onClick={updateCurrent}
          className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center hidden group-hover:flex group-focus:flex"
        >
          <Icon
            name={current?.id === item.id && playing ? "pause" : "play"}
            size={16}
          />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
}

export default SongItem;
