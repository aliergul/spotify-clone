import React from "react";

import { Menu } from "@headlessui/react";
import { Icon } from "icons/Icons";

function Auth() {
  const user = {
    name: "Ali Ergül",
    avatar: "https://i.scdn.co/image/ab67757000003b82d54c464e27bf1cc8a276f7a3",
  };
  return (
    <Menu as="nav" className={"relative z-10"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 ${
              open ? "bg-active" : "bg-black"
            }
             hover:bg-active`}
          >
            <img
              src={user.avatar}
              className="w-8 h-8 rounded-full p-0.5 mr-2"
              alt=""
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180 transition-all"}>
              <Icon name="downDir" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/#"
                >
                  Account
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="/#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
export default Auth;
