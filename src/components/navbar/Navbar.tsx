import React, { Fragment, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

const Image = React.lazy(() => import("../utils/image/Image"));
const Button = React.lazy(() => import("../button/Button"));
const navigation = [{ name: "projetos", to: "/projetos", current: false }];

import {
  NavbarRedu,
  NavTypes,
} from "../../reducers/components/Navbar/navbarRedu";

const MyNavbar = () => {
  const navigate = useNavigate();
  const [stateNav, dispatchNav] = React.useReducer(NavbarRedu, {
    isMobile: false,
  });

  const handleResize = () => {
    if (window.innerWidth < 768) {
      dispatchNav({ type: NavTypes.SET_MOB, payload: true });
    } else {
      dispatchNav({ type: NavTypes.SET_MOB, payload: false });
    }
  };

  // create an event listener
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.performance) {
      if (performance.navigation.type == 1) {
        handleResize();
      }
    }
  }, []);
  return (
    <>
      <Disclosure
        as="nav"
        style={{ zIndex: 100 }}
        className="backdrop-blur-sm bg-zinc-900/30 fixed w-full"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="sm:hidden">
                  {/* Mobile menu button*/}

                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost rounded-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
                      style={{ width: "90px" }}
                    >
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() =>
                            navigate(
                              item.to != "" || item.to != null
                                ? item.to
                                : "/undefined"
                            )
                          }
                        >
                          <a>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {!stateNav.isMobile ? (
                      <>
                        <button
                          className="btn btn-ghost m-1 hover:bg-transparent"
                          style={{
                            fontWeight: "bold",
                            width: "180px",
                            height: "70px",
                          }}
                        >
                          <Image
                            width={213}
                            height={213}
                            alt="A logo do site (meio obvio)"
                            src="https://media.discordapp.net/attachments/1028750792640954368/1228437873943117925/image-removebg-preview.png?ex=662c0aec&is=661995ec&hm=37b4fa5452dc9832fe8b28a82176c254a34b93084dadd35bee996a7230bd2621&=&format=webp&quality=lossless&width=742&height=318"
                          />
                        </button>
                        {navigation.map((item) => (
                          <Button
                            key={item.name}
                            text={item.name}
                            to={
                              item.to != null || item.to != ""
                                ? item.to
                                : undefined
                            }
                          />
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {/* {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.to}
                          className={twMerge(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))} */}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {/* <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        
                      </Menu.Button>
                    </div> */}
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() => navigate("#")}
                              className={twMerge(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        {/* <Menu.Item>
                          {({ active }) => (
                            <a
                            onClick={() => navigate("#")}
                              className={twMerge(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() => navigate("#")}
                              className={twMerge(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item> */}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.to}
                    className={twMerge(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            {/* <div className="divider p-0 m-0"/> */}
          </>
        )}
      </Disclosure>
    </>
  );
};

export default MyNavbar;
